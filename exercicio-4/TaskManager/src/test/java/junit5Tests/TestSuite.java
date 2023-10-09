package test.java.junit5Tests;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;


@RunWith(Suite.class)
@Suite.SuiteClasses({
        CreateTaskFunctionalTestJ5.class,
        UpdateTaskFunctionalTestJ5.class,
        DeleteTaskFunctionalTestJ5.class,
        ListTasksFunctionalTestJ5.class,
        PrioritizeTaskFunctionalTestJ5.class
})
public class TestSuite {

}