package test.java.models;

import  main.java.org.com.models.Priority;
import  main.java.org.com.models.TaskInfo;
import  org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TaskInfoTest {

    @Test
    public void testValidTaskInfo() {
        TaskInfo taskInfo = new TaskInfo("Title", "Description", "2023-08-30", Priority.HIGH);

        assertEquals("Title", taskInfo.title());
        assertEquals("Description", taskInfo.description());
        assertEquals("2023-08-30", taskInfo.dueDate());
        assertEquals(Priority.HIGH, taskInfo.priority());
    }

    @Test
    public void testEmptyTitle() {
        assertThrows(IllegalArgumentException.class, () -> {
            new TaskInfo("", "Description", "2023-08-30", Priority.MEDIUM);
        });
    }

    @Test
    public void testNullDueDate() {
        assertThrows(IllegalArgumentException.class, () -> {
            new TaskInfo("Title", "Description", null, Priority.LOW);
        });
    }

    @Test
    public void testNullPriority() {
        assertThrows(IllegalArgumentException.class, () -> {
            new TaskInfo("Title", "Description", "2023-08-30", null);
        });
    }
}
