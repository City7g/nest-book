import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  readonly title?: string;

  @IsOptional()
  @IsString()
  readonly author?: string;

  @IsOptional()
  @IsNumber()
  readonly pages?: number;
}
