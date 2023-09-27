package test.java.junit5Tests;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import main.java.org.com.services.TaskManager;
import main.java.org.com.models.TaskInfo;
import main.java.org.com.models.Priority;

public class DeleteTaskFunctionalTestJ5 {

    private TaskManager taskManager;

    @BeforeEach
    public void setUp() {
        taskManager = new TaskManager();
        // Create some initial tasks for testing deletions
        TaskInfo initialTaskInfo = new TaskInfo("Task 1", "Description 1", "2023-08-30", Priority.HIGH);
        taskManager.createTask(initialTaskInfo);
    }

    @Test
    public void testDeleteTask() {
        taskManager.createTask(new TaskInfo("Task 2", "Description 2", "2023-09-30", Priority.MEDIUM));
        taskManager.createTask(new TaskInfo("Task 3", "Description 3", "2023-10-30", Priority.LOW));

        // Delete Task 2
        taskManager.deleteTask(2);
        assertNull(taskManager.getTaskById(2));

        // Verify that there are 2 tasks remaining
        assertEquals(2, taskManager.getAllTasks().size());
    }

    @Test
    public void testDeleteNonExistentTask() {
        taskManager.createTask(new TaskInfo("Task 2", "Description 2", "2023-09-30", Priority.MEDIUM));

        // Attempt to delete a non-existent task
        taskManager.deleteTask(3);

        // Verify that no task was deleted
        assertEquals(2, taskManager.getAllTasks().size());
    }
}

