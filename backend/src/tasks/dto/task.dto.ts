import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class TaskDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isCompleted: boolean;
}
