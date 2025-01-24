import { TaskDto } from './dto/task.dto';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    createTask(dto: TaskDto): Promise<{
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
    getTaskById(id: string): Promise<{
        title: string;
        description: string | null;
        isCompleted: boolean;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateTask(id: string, data: Partial<TaskDto>): Promise<{
        title: string;
        description: string | null;
        isCompleted: boolean;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteTask(id: string): Promise<{
        title: string;
        description: string | null;
        isCompleted: boolean;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
