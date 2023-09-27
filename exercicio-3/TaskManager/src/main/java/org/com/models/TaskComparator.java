package main.java.org.com.models;

import java.util.Comparator;

public class TaskComparator implements Comparator<Task> {
    @Override
    public int compare(Task task1, Task task2) {
        // First, compare by due date
        int dateComparison = task1.getDueDate().compareTo(task2.getDueDate());
        if (dateComparison != 0) {
            return dateComparison;
        }

        // If due dates are equal, compare by priority
        return task1.getPriority().compareTo(task2.getPriority());
    }

}
