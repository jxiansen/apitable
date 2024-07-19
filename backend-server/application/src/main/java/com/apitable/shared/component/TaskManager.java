

package com.apitable.shared.component;

import static org.springframework.boot.autoconfigure.task.TaskExecutionAutoConfiguration.APPLICATION_TASK_EXECUTOR_BEAN_NAME;

import com.apitable.core.util.SpringContextHolder;
import java.util.concurrent.Executor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

/**
 * <p>
 * Asynchronous Thread Task Manager.
 * </p>
 *
 * @author Shawn Deng
 */
@Component
@Slf4j
public class TaskManager {

    public static TaskManager me() {
        return SpringContextHolder.getBean(TaskManager.class);
    }

    public void execute(Runnable runnable) {
        SpringContextHolder.getBean(APPLICATION_TASK_EXECUTOR_BEAN_NAME, Executor.class)
            .execute(runnable);
    }
}
