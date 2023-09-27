package test.java.functionalTests;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

@RunWith(Suite.class)
@Suite.SuiteClasses({
        CreateTaskTest.class,
        UpdateTaskTest.class,
        DeleteTaskTest.class,
        ListTasksTest.class,
        PrioritizeTaskTest.class
})
public class TestSuite {

}