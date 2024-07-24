import { Injectable } from '@nestjs/common';
import { Task,TaskStatus } from './task.model';
import { UUID, randomUUID } from 'crypto';
import { createTaskDto } from './createTask.dto';
@Injectable()
export class TaskService {
    private tasks:Task[]= [];

    getAllTasks():Task[]{
        return this.tasks;
    }

    createTask(createtaskdto:createTaskDto):Task{
       // const{title,description} = createtaskdto;
     const task:Task = {
        id:randomUUID(),
        title:createtaskdto.title,
        description:createtaskdto.description,
        status:TaskStatus.OPEN,
     }

     this.tasks.push(task);

     return task;

    }
}
