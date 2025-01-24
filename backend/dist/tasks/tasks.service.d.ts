import { PrismaService } from 'src/prisma/prisma.service';
import { TaskDto } from './dto/task.dto';
export declare class TasksService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(dto: TaskDto): Promise<{
        title: string;
        description: string | null;
        isCompleted: boolean;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: number): Promise<{
        title: string;
        description: string | null;
        isCompleted: boolean;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllTasks(): Promise<{
        title: string;
        description: string | null;
        isCompleted: boolean;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getTaskById(id: number): Promise<{
        title: string;
        description: string | null;
        isCompleted: boolean;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateTask(data: Partial<TaskDto>, taskId: number): Promise<{
        title: string;
        description: string | null;
        isCompleted: boolean;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
