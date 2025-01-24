import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TaskDto } from './dto/task.dto';
@Injectable()
export class TasksService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: TaskDto) {
    return await this.prismaService.task.create({ data: dto });
  }

  async delete(id: number) {
    try {
      return await this.prismaService.task.delete({ where: { id } });
    } catch (e) {
      console.log(e);
      throw new HttpException(
        `Task with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async getAllTasks() {
    return await this.prismaService.task.findMany();
  }

  async getTaskById(id: number) {
    try {
      const task = await this.prismaService.task.findUnique({ where: { id } });
      if (!task) {
        throw new Error('not found');
      }
      return task;
    } catch (e) {
      console.log(e);
      throw new HttpException(
        `Task with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async updateTask(data: Partial<TaskDto>, taskId: number) {
    try {
      console.log(data);
      return await this.prismaService.task.update({
        where: { id: taskId },
        data,
      });
    } catch (e) {
      console.log(e);
      throw new HttpException(
        `Task with id ${taskId} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
