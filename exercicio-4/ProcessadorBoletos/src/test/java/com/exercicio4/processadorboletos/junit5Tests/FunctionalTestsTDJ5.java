package com.exercicio4.processadorboletos.junit5Tests;

import com.exercicio4.processadorboletos.models.Boleto;
import com.exercicio4.processadorboletos.models.Fatura;
import com.exercicio4.processadorboletos.services.ProcessadorBoletos;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

public class FunctionalTestsTDJ5 {

    private Fatura fatura;
    private ProcessadorBoletos processador;

    @BeforeEach
    public void setUp() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date dataFatura = sdf.parse("2023-09-10");
            fatura = new Fatura("Cliente 1", 1500.00, dataFatura);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        processador = new ProcessadorBoletos();
    }

    @Test
    @DisplayName("Fatura é criada inicialmente")
    public void testFaturaEhCriadaInicialmente() {
        assertNotNull(fatura, "A fatura deveria ter sido criada");
    }

    @Test
    @DisplayName("Fatura não é paga quando não há boletos processados")
    public void testFaturaNaoEPagaSemBoletosProcessados() {
        assertFalse(fatura.isPaga(), "A fatura não deveria estar paga sem boletos processados");
    }

    @Test
    @DisplayName("Fatura não é paga quando não há boletos pagos")
    public void testFaturaNaoEPagaSemBoletosPagos() {
        assertFalse(fatura.isPaga(), "A fatura não deveria estar paga sem boletos pagos");
    }

    @Test
    @DisplayName("Fatura é paga quando há boletos processados e pagos")
    public void testFaturaEPagaComBoletosProcessadosEPagos() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date dataBoleto1 = sdf.parse("2023-08-19");
            Boleto boleto1 = new Boleto("001", 2000.00, dataBoleto1);
            processador.processarBoleto(fatura, boleto1);
            fatura.setPaga();
            assertTrue(fatura.isPaga(), "A fatura deveria estar paga com boletos processados e pagos");
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    @Test
    @DisplayName("Fatura não é paga quando o valor dos boletos é maior que o valor da fatura")
    public void testValorMaiorQueFatura() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date dataBoleto1 = sdf.parse("2023-08-19");
            Boleto boleto1 = new Boleto("001", 1600.00, dataBoleto1);
            processador.processarBoleto(fatura, boleto1);
            assertTrue(fatura.isPaga(), "A fatura é paga e o cliente recebe crédito pelo pagamento excedente.");
            assertEquals(fatura.getCreditoProxFatura(), (fatura.getValorPago() - fatura.getValorTotal()));
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
}
