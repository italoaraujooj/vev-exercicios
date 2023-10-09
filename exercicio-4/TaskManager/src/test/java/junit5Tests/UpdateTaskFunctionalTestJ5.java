package test.java.junit5Tests;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import main.java.org.com.services.TaskManager;
import main.java.org.com.models.TaskInfo;
import main.java.org.com.models.Priority;

public class UpdateTaskFunctionalTestJ5 {

    private TaskManager taskManager;

    @BeforeEach
    public void setUp() {
        taskManager = new TaskManager();
        // Create some initial tasks for testing updates
        TaskInfo initialTaskInfo = new TaskInfo("Task 1", "Description 1", "2023-08-30", Priority.HIGH);
        taskManager.createTask(initialTaskInfo);
    }

    @Test
    public void testUpdateTask() {
        // Simulate updating a task and then checking if it was updated correctly
        TaskInfo updatedTaskInfo = new TaskInfo("Updated Task 1", "Updated Description 1", "2023-09-30", Priority.LOW);
        assertTrue(taskManager.updateTask(1, updatedTaskInfo));

        // Check if the task was updated correctly
        assertEquals("Updated Task 1", taskManager.getTaskById(1).getTitle());
    }

    @Test
    public void testUpdateNonExistentTask() {
        // Simulate updating a non-existent task and check if it fails
        TaskInfo updatedTaskInfo = new TaskInfo("Updated Task 1", "Updated Description 1", "2023-09-30", Priority.LOW);
        assertFalse(taskManager.updateTask(2, updatedTaskInfo));

        // Ensure that no tasks were updated
        assertNull(taskManager.getTaskById(2));
    }
}

