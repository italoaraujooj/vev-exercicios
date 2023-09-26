package com.exercicio2.processadorboletos.junit5Tests;

import com.exercicio2.processadorboletos.models.Boleto;
import com.exercicio2.processadorboletos.models.Fatura;
import com.exercicio2.processadorboletos.services.ProcessadorBoletos;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class FunctionalTestsTDJ5 {

    private Fatura fatura;
    private ProcessadorBoletos processador;

    @BeforeEach
    public void setUp() {
        fatura = new Fatura("Cliente 1", 1500.00, "2023-09-10");
        processador = new ProcessadorBoletos();
    }

    @Test
    @DisplayName("Fatura é criada inicialmente")
    public void testFaturaEhCriadaInicialmente() {
        assertNotNull(fatura, "A fatura deveria ter sido criada");
    }

    @Test
    @DisplayName("Fatura não é paga quando não há boletos processados")
    public void testFaturaNaoEPagaSemBoletosPagos() {
        Boleto boleto1 = new Boleto("001", 2000.00, "2023-08-19");
        assertFalse(fatura.isPaga(), "A fatura não deveria estar paga sem boletos pagos");
    }

    @Test
    @DisplayName("Fatura é paga quando há boletos processados e pagos")
    public void testFaturaEPagaComBoletosProcessadosEPagos() {
        Boleto boleto1 = new Boleto("001", 2000.00, "2023-08-19");
        processador.processarBoleto(fatura, boleto1);
        assertTrue(fatura.isPaga(), "A fatura deveria estar paga com boletos processados e pagos");
    }
}
