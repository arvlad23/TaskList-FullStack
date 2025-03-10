"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TasksService = class TasksService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(dto) {
        return await this.prismaService.task.create({ data: dto });
    }
    async delete(id) {
        try {
            return await this.prismaService.task.delete({ where: { id } });
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException(`Task with id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getAllTasks() {
        return await this.prismaService.task.findMany();
    }
    async getTaskById(id) {
        try {
            const task = await this.prismaService.task.findUnique({ where: { id } });
            if (!task) {
                throw new Error('not found');
            }
            return task;
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException(`Task with id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async updateTask(data, taskId) {
        try {
            console.log(data);
            return await this.prismaService.task.update({
                where: { id: taskId },
                data,
            });
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException(`Task with id ${taskId} not found`, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map