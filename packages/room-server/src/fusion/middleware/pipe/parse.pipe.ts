import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { isString } from 'class-validator';

@Injectable()
export class ParseObjectPipe implements PipeTransform<string, Object> {
  transform(value: string, metadata: ArgumentMetadata): Object {
    try {
      if (!isString(value)) {
        return value;
      }
      return plainToClass<any, Object>(metadata.metatype as ClassType<any>, JSON.parse(value));
    } catch (e) {
      throw new BadRequestException('Bad Request');
    }
  }
}
