package test.java.junit5Tests;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import main.java.org.com.services.TaskManager;
import main.java.org.com.models.TaskInfo;
import main.java.org.com.models.Priority;

public class CreateTaskFunctionalTestJ5 {

    private TaskManager taskManager;

    @BeforeEach
    public void setUp() {
        taskManager = new TaskManager();
    }

    @Test
    public void testCreateTask() {
        TaskInfo taskInfo = new TaskInfo("Task 1", "Description 1", "2023-08-30", Priority.HIGH);
        assertTrue(taskManager.createTask(taskInfo));

        // Check if the task exists in the list
        boolean taskExists = taskManager.getAllTasks()
                .stream()
                .anyMatch(task -> task.getTitle().equals("Task 1"));
        assertTrue(taskExists);
    }

    @org.junit.Test(expected = IllegalArgumentException.class)
    public void testCreateTaskWithInvalidInfo() {
        // Simulate creating a task with invalid information and check if it fails
        TaskInfo invalidTaskInfo = new TaskInfo("", "", "", null);
        assertThrows(IllegalArgumentException.class, () -> taskManager.createTask(invalidTaskInfo));

        // Ensure that no tasks were created
        assertEquals(0, taskManager.getAllTasks().size());
    }

    @Test
    public void testCreateMultipleTasks() {
        // Create multiple tasks
        TaskInfo taskInfo1 = new TaskInfo("Task 1", "Description 1", "2023-08-30", Priority.HIGH);
        TaskInfo taskInfo2 = new TaskInfo("Task 2", "Description 2", "2023-09-30", Priority.MEDIUM);
        TaskInfo taskInfo3 = new TaskInfo("Task 3", "Description 3", "2023-10-30", Priority.LOW);

        assertTrue(taskManager.createTask(taskInfo1));
        assertTrue(taskManager.createTask(taskInfo2));
        assertTrue(taskManager.createTask(taskInfo3));

        // Verify that all tasks were created
        assertEquals(3, taskManager.getAllTasks().size());
    }
}

