import { IsObject, IsString } from 'class-validator';

export class SocketRo {
  @IsString()
  event!: string;

  @IsObject()
  message: any;
}
