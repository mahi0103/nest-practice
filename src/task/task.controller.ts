import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { title } from 'process';
import { createTaskDto } from './createTask.dto';

@Controller('task')
export class TaskController {
    constructor(private taskservice:TaskService){}

    @Get()
    getAllTasks():Task[]{
        return this.taskservice.getAllTasks();
    }
 
    @Post()
    createTask(@Body() createtaskdto:createTaskDto):Task{
        return this.taskservice.createTask(createtaskdto);

    }
   
}
