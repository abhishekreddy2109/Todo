import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  updateTask(task: Task) {
    throw new Error('Method not implemented.');
  }
  private tasks: Task[] = [];
  private currentId = 0;

  // Updated addTask method
  addTask(title: string): Task {
    const newTask: Task = {
      id: this.currentId++, // Incr ement ID for each new task
      title,
      completed: false,
      editMode: false
    };
    this.tasks.push(newTask);
    return newTask; // Return the newly created task
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  completeTask(id: number): void {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = true;
    }
  }
}

