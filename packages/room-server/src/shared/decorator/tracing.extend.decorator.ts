import { Logger } from '@nestjs/common';
import { trace } from '@opentelemetry/api';
import { enableOtelJaeger } from 'app.environment';
import { merge } from 'lodash';

export function SpanAddTag(attributes: Attributes[]): MethodDecorator {
  const logger = new Logger('SpanAddTagDecorator');

  return (_target: object, _key: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
    const _this = descriptor.value;

    descriptor.value = function (...args: any[]) {
      try {
        if (enableOtelJaeger) {
          const attrs = {};
          attributes.forEach((attr) => merge(attrs, typeof attr === 'function' ? attr(args) : attr));
          trace.getActiveSpan()?.setAttributes(attrs);
        }
      } catch (e) {
        // ignore
        logger.warn(`set tracking attributes, error：${(e as Error)?.message}`);
      }
      return _this.apply(this, args);
    };
    return descriptor;
  };
}

declare type Attributes = ((args: any[]) => { [key: string]: string }) | { [key: string]: string };
