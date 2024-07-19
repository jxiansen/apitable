

package com.apitable.shared.config;

import com.apitable.core.exception.BusinessException;
import com.apitable.shared.config.configure.TaskDecoratorWrapper;
import com.apitable.shared.holder.UserHolder;
import java.util.Map;
import java.util.concurrent.ThreadPoolExecutor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.MDC;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.boot.task.ThreadPoolTaskExecutorCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.i18n.LocaleContext;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.core.task.TaskDecorator;
import org.springframework.scheduling.annotation.EnableAsync;

/**
 * <p>
 * Asynchronous Task Configuration.
 * </p>
 *
 * @author Shawn Deng
 */
@Configuration(proxyBeanMethods = false)
@Slf4j
@EnableAsync
public class TaskExecutionConfig {

    @Bean
    ThreadPoolTaskExecutorCustomizer taskExecutorCustomizer() {
        return executor -> {
            executor.setCorePoolSize(4);
            executor.setMaxPoolSize(50);
            executor.setQueueCapacity(500);
            executor.setKeepAliveSeconds(3000);
            executor.setThreadNamePrefix("thread-task-");
            executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        };
    }

    @Bean
    TaskDecorator taskDecorator(ObjectProvider<TaskDecoratorWrapper> taskDecoratorWrapper) {
        return runnable -> {
            LocaleContext localeContext = LocaleContextHolder.getLocaleContext();
            Map<String, String> mdcContext = MDC.getCopyOfContextMap();
            TaskDecoratorWrapper wrapper = taskDecoratorWrapper.getIfAvailable();
            return () -> {
                try {
                    LocaleContextHolder.setLocaleContext(localeContext, true);
                    if (mdcContext != null) {
                        MDC.setContextMap(mdcContext);
                    }
                    // execute asynchronous tasks
                    runnable.run();
                } catch (Exception ex) {
                    if (!(ex instanceof BusinessException)) {
                        log.error("execution of asynchronous task exception.", ex);
                    }
                    throw ex;
                } finally {
                    log.info("Reset asynchronous thread variables");
                    MDC.clear();
                    LocaleContextHolder.resetLocaleContext();
                    UserHolder.remove();
                    if (wrapper != null) {
                        wrapper.doFinally();
                    }
                }
            };
        };
    }
}
