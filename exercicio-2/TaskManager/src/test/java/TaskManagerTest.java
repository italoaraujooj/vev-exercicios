
import org.com.models.Priority;
import org.com.models.Task;
import org.com.models.TaskInfo;
import org.com.services.TaskManager;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


public class TaskManagerTest {
    @Test
    public void testCreateTaskSuccess() {
        TaskManager taskManager = new TaskManager();
        TaskInfo taskInfo = new TaskInfo("Grocery Shopping", "milk, eggs, butter, bread", "2023-08-30", Priority.MEDIUM);

        boolean result = taskManager.createTask(taskInfo);

        assertTrue(result);
        assertEquals(1, taskManager.getAllTasks().size());
    }



    @Test
    public void testUpdateTaskDetails() {
        TaskManager taskManager = new TaskManager();
        TaskInfo taskInfo = new TaskInfo("Old Task", "old task description", "2023-08-25", Priority.MEDIUM);
        taskManager.createTask(taskInfo);

        TaskInfo updatedInfo = new TaskInfo("Updated Task", "newDescription", "2023-08-28", Priority.HIGH);
        taskManager.updateTask(1, updatedInfo);

        Task task = taskManager.getTaskById(1);
        assertEquals("Updated Task", task.getTitle());
        assertEquals("newDescription", task.getDescription());
        assertEquals(Priority.HIGH, task.getPriority());
    }

        @Test
        public void testCreateMultipleTasksOrderPriority() {
            TaskManager taskManager = new TaskManager();
            TaskInfo task1Info = new TaskInfo("Tarefa 1", "Descrição da Tarefa 1", "2023-08-25", Priority.LOW);
            TaskInfo task2Info = new TaskInfo("Tarefa 2", "Descrição da Tarefa 2", "2023-08-25", Priority.HIGH);

            taskManager.createTask(task1Info);
            taskManager.createTask(task2Info);
            List<Task> tasks = taskManager.getAllTasks();

            assertEquals(2, tasks.size());
            assertEquals("Tarefa 1", tasks.get(0).getTitle());
            assertEquals("Tarefa 2", tasks.get(1).getTitle());
            assertEquals(Priority.LOW, tasks.get(0).getPriority());
            assertEquals(Priority.HIGH, tasks.get(1).getPriority());
        }

    @Test
    public void testCreateMultipleTasksOrderDate() {
        TaskManager taskManager = new TaskManager();
        TaskInfo task1Info = new TaskInfo("Tarefa 1", "Descrição da Tarefa 1", "2023-08-25", Priority.LOW);
        TaskInfo task2Info = new TaskInfo("Tarefa 2", "Descrição da Tarefa 2", "2023-08-27", Priority.LOW);

        taskManager.createTask(task1Info);
        taskManager.createTask(task2Info);
        List<Task> tasks = taskManager.getAllTasks();

        assertEquals(2, tasks.size());
        assertEquals("Tarefa 1", tasks.get(0).getTitle());
        assertEquals("Tarefa 2", tasks.get(1).getTitle());
        assertEquals("2023-08-25", tasks.get(0).getDueDate());
        assertEquals("2023-08-27", tasks.get(1).getDueDate());
    }

    @Test
    public void testDeleteTask() {
        TaskManager taskManager = new TaskManager();
        TaskInfo taskInfo = new TaskInfo("Title Delete", "Description", "2023-08-20", Priority.LOW);

        taskManager.createTask(taskInfo);
        taskManager.deleteTask(1);

        List<Task> tasks = taskManager.getAllTasks();

        assertEquals(0, tasks.size());
    }


}
