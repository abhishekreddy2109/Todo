
import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  taskTitle: string = '';

  constructor(private taskService: TaskService) { }

  addTask() {
    if (!this.taskTitle.trim()) {
      return; // Prevent adding empty tasks
    }
    this.taskService.addTask(this.taskTitle); // Pass the title string
    this.taskTitle = ''; // Reset the input field
  }
}

