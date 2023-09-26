package com.exercicio4.processadorboletos.functionalTests;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;

@RunWith(Suite.class)
@Suite.SuiteClasses({
        com.exercicio4.processadorboletos.functionalTests.FunctionalTestsTD.class,
        com.exercicio4.processadorboletos.functionalTests.FunctionalTestsAVL.class,
})
public class TestSuite {
    // Esta classe não precisa de métodos de teste
}