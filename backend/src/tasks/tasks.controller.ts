import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  createTask(@Body() dto: TaskDto) {
    return this.tasksService.create(dto);
  }

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(Number(id));
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() data: Partial<TaskDto>) {
    return this.tasksService.updateTask(data, Number(id));
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.delete(Number(id));
  }
}
