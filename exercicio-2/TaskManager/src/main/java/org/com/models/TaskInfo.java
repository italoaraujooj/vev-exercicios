package org.com.models;

public record TaskInfo(String title, String description, String dueDate, Priority priority) {
    public TaskInfo {

        if (title == null || title.isEmpty()) {
            throw new IllegalArgumentException("Title cannot be empty or null");
        }
        if (description == null) {
            description = "";
        }
        if (dueDate == null || dueDate.isEmpty()) {
            throw new IllegalArgumentException("Due date cannot be empty or null");
        }
        if (priority == null) {
            throw new IllegalArgumentException("Priority cannot be null");
        }

    }
}
