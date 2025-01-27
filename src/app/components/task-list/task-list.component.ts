import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  showCompleted: boolean = false;
  editMode: boolean = false;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks(); // Refresh the task list
  }

  get filteredTasks(): Task[] {
    return this.tasks.filter(task => task.completed === this.showCompleted);
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  saveTask(): void {
    this.editMode = false; // Exit edit mode
  }
}
