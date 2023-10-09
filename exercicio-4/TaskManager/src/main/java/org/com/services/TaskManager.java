package main.java.org.com.services;

import main.java.org.com.models.Task;
import main.java. org.com.models.TaskComparator;
import main.java.org.com.models.TaskInfo;
import java.util.ArrayList;
import java.util.List;

public class TaskManager {
    private final List<Task> tasks;
    private int nextId;

    public TaskManager(){
        this.tasks = new ArrayList<Task>();
        this.nextId = 1;
    }

    public boolean createTask(TaskInfo taskInfo) {
        Task task = new Task(nextId, taskInfo.title(), taskInfo.description(), taskInfo.dueDate(), taskInfo.priority());
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
                task.setTitle(updatedInfo.title());
                task.setDescription(updatedInfo.description());
                task.setDueDate(updatedInfo.dueDate());
                task.setPriority(updatedInfo.priority());
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

    public void deleteTask(int i) {
        for (Task task: this.tasks){
            if (task.getId() == i) {
                this.tasks.remove(task);
                return;
            }
        }
    }


}
