import { Transform } from 'class-transformer';
import { IsString, IsInt, IsDate } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @Transform(({ value }) => new Date(value * 1000))
  @IsDate()
  publishedDate: Date;

  @IsInt()
  pages: number;
}
