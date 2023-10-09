package test.java.junit5Tests;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.util.List;
import main.java.org.com.services.TaskManager;
import main.java.org.com.models.Task;
import main.java.org.com.models.TaskInfo;
import main.java.org.com.models.Priority;

public class ListTasksFunctionalTestJ5 {

    private TaskManager taskManager;

    @BeforeEach
    public void setUp() {
        taskManager = new TaskManager();
        // Create some initial tasks for testing listing
        TaskInfo taskInfo1 = new TaskInfo("Task 1", "Description 1", "2023-08-30", Priority.HIGH);
        TaskInfo taskInfo2 = new TaskInfo("Task 2", "Description 2", "2023-09-30", Priority.MEDIUM);
        TaskInfo taskInfo3 = new TaskInfo("Task 3", "Description 3", "2023-10-30", Priority.LOW);
        taskManager.createTask(taskInfo1);
        taskManager.createTask(taskInfo2);
        taskManager.createTask(taskInfo3);
    }

    @Test
    public void testListTasks() {
        List<Task> tasks = taskManager.getAllTasks();
        assertNotNull(tasks);
        assertEquals(3, tasks.size());

        // Verify the order of tasks (sorted by due date and priority)
        assertEquals("Task 1", tasks.get(0).getTitle());
        assertEquals("Task 2", tasks.get(1).getTitle());
        assertEquals("Task 3", tasks.get(2).getTitle());
    }

    @Test
    public void testListEmptyTasks() {
        taskManager = new TaskManager(); // Creating a new empty task manager
        List<Task> tasks = taskManager.getAllTasks();
        assertNotNull(tasks);
        assertEquals(0, tasks.size());
    }
}
