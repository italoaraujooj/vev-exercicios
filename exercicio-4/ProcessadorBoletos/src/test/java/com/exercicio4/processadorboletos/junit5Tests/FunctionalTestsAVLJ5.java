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

public class FunctionalTestsAVLJ5 {

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
    @DisplayName("Fatura é paga quando boletos somam o valor exato")
    public void testFaturaPagaQuandoBoletosSomamValorExato() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date dataBoleto1 = sdf.parse("2023-08-19");
            Date dataBoleto2 = sdf.parse("2023-08-20");
            Date dataBoleto3 = sdf.parse("2023-08-21");

            Boleto boleto1 = new Boleto("001", 400.00, dataBoleto1);
            Boleto boleto2 = new Boleto("002", 500.00, dataBoleto2);
            Boleto boleto3 = new Boleto("003", 600.00, dataBoleto3);

            processador.processarBoleto(fatura, boleto1);
            processador.processarBoleto(fatura, boleto2);
            processador.processarBoleto(fatura, boleto3);

            assertTrue(fatura.isPaga(), "A fatura deveria estar paga");
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    @Test
    @DisplayName("Fatura não é paga quando boletos somam valor menor")
    public void testFaturaNaoPagaQuandoBoletosSomamValorMenor() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date dataBoleto1 = sdf.parse("2023-08-19");
            Date dataBoleto2 = sdf.parse("2023-08-20");
            Date dataBoleto3 = sdf.parse("2023-08-21");

            Boleto boleto1 = new Boleto("001", 400.00, dataBoleto1);
            Boleto boleto2 = new Boleto("002", 500.00, dataBoleto2);
            Boleto boleto3 = new Boleto("003", 500.00, dataBoleto3);

            processador.processarBoleto(fatura, boleto1);
            processador.processarBoleto(fatura, boleto2);
            processador.processarBoleto(fatura, boleto3);

            assertFalse(fatura.isPaga(), "A fatura não deveria estar paga");
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    @Test
    @DisplayName("Fatura é paga quando boletos somam valor maior")
    public void testFaturaPagaQuandoBoletosSomamValorMaior() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date dataBoleto1 = sdf.parse("2023-08-19");
            Date dataBoleto2 = sdf.parse("2023-08-20");
            Date dataBoleto3 = sdf.parse("2023-08-21");

            Boleto boleto1 = new Boleto("001", 500.00, dataBoleto1);
            Boleto boleto2 = new Boleto("002", 500.00, dataBoleto2);
            Boleto boleto3 = new Boleto("003", 600.00, dataBoleto3);

            processador.processarBoleto(fatura, boleto1);
            processador.processarBoleto(fatura, boleto2);
            processador.processarBoleto(fatura, boleto3);

            assertTrue(fatura.isPaga(), "A fatura deveria estar paga");
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    @Test
    @DisplayName("Fatura é paga quando boleto tem valor maior que a fatura")
    public void testFaturaPagaQuandoBoletoValorMaiorQueFatura() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date dataBoleto1 = sdf.parse("2023-08-19");

            Boleto boleto1 = new Boleto("001", 1501.00, dataBoleto1);

            processador.processarBoleto(fatura, boleto1);

            assertTrue(fatura.isPaga(), "A fatura deveria estar paga");
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    @Test
    @DisplayName("Fatura não é paga quando boleto tem valor menor que a fatura")
    public void testFaturaNaoPagaQuandoBoletoValorMenorQueFatura() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date dataBoleto1 = sdf.parse("2023-08-19");

            Boleto boleto1 = new Boleto("001", 1499.00, dataBoleto1);

            processador.processarBoleto(fatura, boleto1);

            assertFalse(fatura.isPaga(), "A fatura não deveria estar paga");
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    @Test
    @DisplayName("Fatura é paga quando múltiplos boletos somam valor exato")
    public void testFaturaPagaQuandoMultiplosBoletosSomamValorExato() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date dataBoleto1 = sdf.parse("2023-08-19");

            Boleto boleto1 = new Boleto("001", 750.00, dataBoleto1);
            Boleto boleto2 = new Boleto("002", 750.00, dataBoleto1);

            processador.processarBoleto(fatura, boleto1);
            processador.processarBoleto(fatura, boleto2);

            assertTrue(fatura.isPaga(), "A fatura deveria estar paga");
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    @Test
    @DisplayName("Fatura não é paga quando valor da fatura é 1")
    public void testFaturaNaoPagaQuandoValorFaturaEh1() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date dataFatura = sdf.parse("2023-09-10");
            Fatura fatura = new Fatura("Cliente 1", 1, dataFatura);

            assertFalse(fatura.isPaga(), "A fatura não deveria estar paga");
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    @Test
    @DisplayName("Fatura não é paga quando boleto é pago após a data de vencimento")
    public void testFaturaNaoPagaQuandoBoletoPagoAposDataVencimento() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date dataBoleto1 = sdf.parse("2023-08-19");
            Date dataBoleto2 = sdf.parse("2023-08-20");
            Date dataBoleto3 = sdf.parse("2023-09-11");

            Boleto boleto1 = new Boleto("001", 400.00, dataBoleto1);
            Boleto boleto2 = new Boleto("002", 500.00, dataBoleto2);
            Boleto boleto3 = new Boleto("003", 600.00, dataBoleto3);

            processador.processarBoleto(fatura, boleto1);
            processador.processarBoleto(fatura, boleto2);
            processador.processarBoleto(fatura, boleto3);

            assertFalse(fatura.isPaga(), "A fatura não deveria estar paga");
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

}