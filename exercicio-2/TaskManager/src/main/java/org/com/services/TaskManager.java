package org.com.services;

import org.com.models.Task;
import org.com.models.TaskComparator;
import org.com.models.TaskInfo;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

public class TaskManager {
    private List<Task> tasks;
    private int nextId;

    public TaskManager(){
        this.tasks = new ArrayList<Task>();
        this.nextId = 1;
    }

    public boolean createTask(TaskInfo taskInfo) {
        Task task = new Task(nextId, taskInfo.getTitle(), taskInfo.getDescription(), taskInfo.getDueDate(), taskInfo.getPriority());
        tasks.add(task);
        nextId++;
        return true;

    }

    public List<Task> getAllTasks() {
        this.tasks.sort(new TaskComparator());
        return this.tasks;
    }

    public boolean updateTask(int taskId, TaskInfo updatedInfo) {
        for ( Task task: this.tasks) {
            if (task.getId() == taskId) {
                task.setTitle(updatedInfo.getTitle());
                task.setDescription(updatedInfo.getDescription());
                task.setDueDate(updatedInfo.getDueDate());
                task.setPriority(updatedInfo.getPriority());
                return true;
            }
        }
        return false;
    }

    public Task getTaskById(int i) {
        for (Task task: this.tasks){
            if (task.getId() == i) {
                return task;
            }
        }
        return null;
    }

    public boolean deleteTask(int i) {
        for (Task task: this.tasks){
            if (task.getId() == i) {
                this.tasks.remove(task);
                return true;
            }
        }
        return false;
    }


}
