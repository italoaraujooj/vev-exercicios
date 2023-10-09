package test.java.functionalTests;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;
import main.java.org.com.services.TaskManager;
import main.java.org.com.models.Task;
import main.java.org.com.models.TaskInfo;
import main.java.org.com.models.Priority;
import java.util.List;

public class PrioritizeTaskTest {

    private TaskManager taskManager;

    @Before
    public void setUp() {
        taskManager = new TaskManager();
        // Create some initial tasks for testing prioritization
        TaskInfo taskInfo1 = new TaskInfo("Task 1", "Description 1", "2023-08-30", Priority.HIGH);
        TaskInfo taskInfo2 = new TaskInfo("Task 2", "Description 2", "2023-09-30", Priority.MEDIUM);
        TaskInfo taskInfo3 = new TaskInfo("Task 3", "Description 3", "2023-10-30", Priority.LOW);
        taskManager.createTask(taskInfo1);
        taskManager.createTask(taskInfo2);
        taskManager.createTask(taskInfo3);
    }

    @Test
    public void testPrioritizeTask() {
        taskManager.updateTask(1, new TaskInfo("Task 1", "Description 1", "2023-08-30", Priority.LOW));
        List<Task> tasks = taskManager.getAllTasks();
        assertEquals(Priority.LOW, tasks.get(0).getPriority());
    }

    @Test
    public void testPrioritizeNonExistentTask() {
        boolean result = taskManager.updateTask(4, new TaskInfo("Task 4", "Description 4", "2023-09-30", Priority.MEDIUM));
        assertFalse(result);
    }
}
