import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  // function ini bisa digantikan enable implicite convert in main
  // @Type((type) => Number)
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @IsPositive()
  offset: number;
}
