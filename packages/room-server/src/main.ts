import { LoggerService, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { environment } from 'app.environment';
import { AppModule } from 'app.module';
import { useContainer } from 'class-validator';
import * as immer from 'immer';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { I18nService } from 'nestjs-i18n';
import {
  initFastify,
  initHocuspocus,
  initHttpHook,
  initRedisIoAdapter,
  initRoomGrpc,
  initSentry,
  initSocketGrpc,
  initSwagger,
} from 'shared/adapters/adapters.init';
import { APPLICATION_NAME, BootstrapConstants } from 'shared/common/constants/bootstrap.constants';
import { GlobalExceptionFilter } from 'shared/filters';
import { HttpResponseInterceptor } from 'shared/interceptor';

/**
 * entrance method
 */
async function bootstrap() {
  immer.setAutoFreeze(false);

  const fastifyAdapter = await initFastify();

  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastifyAdapter);

  const logger = app.get<LoggerService>(WINSTON_MODULE_NEST_PROVIDER);
  app.useLogger(logger);

  initRedisIoAdapter(app);
  initSwagger(app);
  initHttpHook(app);
  initSentry(app);

  // express performance traces
  // app.use(Sentry.Handlers.requestHandler());

  // global exception filter
  app.useGlobalFilters(new GlobalExceptionFilter(app.get<I18nService>(I18nService)));

  // tracing all the requests by sentry
  // app.useGlobalInterceptors(new TracingHandlerInterceptor());

  // global intercept with standard format
  app.useGlobalInterceptors(new HttpResponseInterceptor());

  // global pipes for custom validation
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      stopAtFirstError: true,
      forbidUnknownValues: false,
    }),
  );

  // enable shutdown hooks
  app.enableShutdownHooks();

  // grpc
  initRoomGrpc(logger, app);
  initSocketGrpc(logger, app);

  initHocuspocus(app);

  await app.startAllMicroservices();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  // listening port
  await app.listen(BootstrapConstants.SERVER_PORT, '0.0.0.0');

  // print running environment
  logger.log(`Application[${APPLICATION_NAME}]-Env[${environment}]`, 'Bootstrap');
  // print server info
  logger.log(`The service is running, please visit it: [ ${await app.getUrl()} ]`, 'Bootstrap');
}

void bootstrap();
