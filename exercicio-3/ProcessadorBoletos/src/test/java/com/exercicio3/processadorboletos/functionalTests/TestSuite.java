package com.exercicio2.processadorboletos.functionalTests;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;

@RunWith(Suite.class)
@Suite.SuiteClasses({
        FunctionalTestsTD.class,
        FunctionalTestsAVL.class,
})
public class TestSuite {
    // Esta classe não precisa de métodos de teste
}