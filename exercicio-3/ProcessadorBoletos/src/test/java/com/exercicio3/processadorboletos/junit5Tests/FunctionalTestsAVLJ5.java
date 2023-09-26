package com.exercicio2.processadorboletos.junit5Tests;

import com.exercicio2.processadorboletos.models.Boleto;
import com.exercicio2.processadorboletos.models.Fatura;
import com.exercicio2.processadorboletos.services.ProcessadorBoletos;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class FunctionalTestsAVLJ5 {

    private Fatura fatura;
    private ProcessadorBoletos processador;

    @BeforeEach
    public void setUp() {
        fatura = new Fatura("Cliente 1", 1500.00, "2023-09-10");
        processador = new ProcessadorBoletos();
    }

    @Test
    @DisplayName("Fatura é paga quando boletos somam o valor exato")
    public void testFaturaPagaQuandoBoletosSomamValorExato() {
        Boleto boleto1 = new Boleto("001", 400.00, "2023-08-19");
        Boleto boleto2 = new Boleto("002", 500.00, "2023-08-20");
        Boleto boleto3 = new Boleto("003", 600.00, "2023-08-21");

        processador.processarBoleto(fatura, boleto1);
        processador.processarBoleto(fatura, boleto2);
        processador.processarBoleto(fatura, boleto3);

        assertTrue(fatura.isPaga(), "A fatura deveria estar paga");
    }

    @Test
    @DisplayName("Fatura não é paga quando boletos somam valor menor")
    public void testFaturaNaoPagaQuandoBoletosSomamValorMenor() {
        Boleto boleto1 = new Boleto("001", 400.00, "2023-08-19");
        Boleto boleto2 = new Boleto("002", 500.00, "2023-08-20");
        Boleto boleto3 = new Boleto("003", 500.00, "2023-08-21");

        processador.processarBoleto(fatura, boleto1);
        processador.processarBoleto(fatura, boleto2);
        processador.processarBoleto(fatura, boleto3);

        assertFalse(fatura.isPaga(), "A fatura não deveria estar paga");
    }

    @Test
    @DisplayName("Fatura é paga quando boletos somam valor maior")
    public void testFaturaPagaQuandoBoletosSomamValorMaior() {
        Boleto boleto1 = new Boleto("001", 500.00, "2023-08-19");
        Boleto boleto2 = new Boleto("002", 500.00, "2023-08-20");
        Boleto boleto3 = new Boleto("003", 600.00, "2023-08-21");

        processador.processarBoleto(fatura, boleto1);
        processador.processarBoleto(fatura, boleto2);
        processador.processarBoleto(fatura, boleto3);

        assertTrue(fatura.isPaga(), "A fatura deveria estar paga");
    }

    @Test
    @DisplayName("Fatura é paga quando boleto tem valor maior que a fatura")
    public void testFaturaPagaQuandoBoletoValorMaiorQueFatura() {
        Boleto boleto1 = new Boleto("001", 1501.00, "2023-08-19");

        processador.processarBoleto(fatura, boleto1);

        assertTrue(fatura.isPaga(), "A fatura deveria estar paga");
    }

    @Test
    @DisplayName("Fatura não é paga quando boleto tem valor menor que a fatura")
    public void testFaturaNaoPagaQuandoBoletoValorMenorQueFatura() {
        Boleto boleto1 = new Boleto("001", 1499.00, "2023-08-19");

        processador.processarBoleto(fatura, boleto1);

        assertFalse(fatura.isPaga(), "A fatura não deveria estar paga");
    }

    @Test
    @DisplayName("Fatura é paga quando múltiplos boletos somam valor exato")
    public void testFaturaPagaQuandoMultiplosBoletosSomamValorExato() {
        Boleto boleto1 = new Boleto("001", 750.00, "2023-08-19");
        Boleto boleto2 = new Boleto("002", 750.00, "2023-08-19");

        processador.processarBoleto(fatura, boleto1);
        processador.processarBoleto(fatura, boleto2);

        assertTrue(fatura.isPaga(), "A fatura deveria estar paga");
    }

    @Test
    @DisplayName("Fatura não é paga quando valor da fatura é 1")
    public void testFaturaNaoPagaQuandoValorFaturaEh1() {
        Fatura fatura = new Fatura("Cliente 1", 1, "2023-09-10");

        assertFalse(fatura.isPaga(), "A fatura não deveria estar paga");
    }
}
