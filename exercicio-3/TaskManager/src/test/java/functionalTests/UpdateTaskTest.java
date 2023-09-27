package test.java.functionalTests;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;
import main.java.org.com.services.TaskManager;
import main.java.org.com.models.TaskInfo;
import main.java.org.com.models.Priority;

public class UpdateTaskTest {

    private TaskManager taskManager;

    @Before
    public void setUp() {
        taskManager = new TaskManager();
        // Create some initial tasks for testing updates
        TaskInfo initialTaskInfo = new TaskInfo("Task 1", "Description 1", "2023-08-30", Priority.HIGH);
        taskManager.createTask(initialTaskInfo);
    }

    @Test
    public void testUpdateTask() {
        TaskInfo updatedTaskInfo = new TaskInfo("Updated Task 1", "Updated Description 1", "2023-09-30", Priority.LOW);
        assertTrue(taskManager.updateTask(1, updatedTaskInfo));

        // Verify that the task was updated correctly
        assertEquals("Updated Task 1", taskManager.getTaskById(1).getTitle());
    }

    @Test
    public void testUpdateNonExistentTask() {
        TaskInfo updatedTaskInfo = new TaskInfo("Updated Task 1", "Updated Description 1", "2023-09-30", Priority.LOW);
        assertFalse(taskManager.updateTask(2, updatedTaskInfo));

        // Verify that no task was updated
        assertNull(taskManager.getTaskById(2));
    }
}
