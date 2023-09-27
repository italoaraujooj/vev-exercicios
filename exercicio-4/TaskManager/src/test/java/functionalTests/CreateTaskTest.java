package test.java.functionalTests;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;
import main.java.org.com.services.TaskManager;
import main.java.org.com.models.TaskInfo;
import main.java.org.com.models.Priority;

public class CreateTaskTest {

    private TaskManager taskManager;

    @Before
    public void setUp() {
        taskManager = new TaskManager();
    }

    @Test
    public void testCreateTask() {
        TaskInfo taskInfo = new TaskInfo("Task 1", "Description 1", "2023-08-30", Priority.HIGH);
        assertTrue(taskManager.createTask(taskInfo));

        // Verify that the task was created
        assertEquals(1, taskManager.getAllTasks().size());
    }

    @Test(expected = IllegalArgumentException.class)
    public void testCreateTaskWithInvalidInfo() {
        // Simulate creating a task with invalid information and expect an IllegalArgumentException
        TaskInfo invalidTaskInfo = new TaskInfo("", "", "", null);
        taskManager.createTask(invalidTaskInfo);

        // Ensure that no tasks were created
        assertEquals(0, taskManager.getAllTasks().size());
    }
}
