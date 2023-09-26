package com.exercicio4.processadorboletos.models;

import com.exercicio4.processadorboletos.services.ProcessadorBoletos;
import org.junit.jupiter.api.Test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

public class ProcessadorBoletosTest {

    @Test
    public void processadorDeveMarcarFaturaComoPaga() throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

        Fatura fatura = new Fatura("Cliente 1", 1500.00, sdf.parse("2023-09-10"));
        ProcessadorBoletos processador = new ProcessadorBoletos();

        Boleto boleto1 = new Boleto("001", 500.00, sdf.parse("2023-08-19"));
        Boleto boleto2 = new Boleto("002", 600.00, sdf.parse("2023-08-20"));
        Boleto boleto3 = new Boleto("003", 600.00, sdf.parse("2023-08-21"));

        processador.processarBoleto(fatura, boleto1);
        processador.processarBoleto(fatura, boleto2);
        processador.processarBoleto(fatura, boleto3);

        assertTrue(fatura.isPaga());
    }

    @Test
    public void processadorDeveMarcarFaturaComoNaoPaga() throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

        Fatura fatura = new Fatura("Cliente 1", 1500.00, sdf.parse("2023-09-10"));
        ProcessadorBoletos processador = new ProcessadorBoletos();

        Boleto boleto1 = new Boleto("001", 500.00, sdf.parse("2023-08-19"));
        Boleto boleto2 = new Boleto("002", 400.00, sdf.parse("2023-08-20"));
        Boleto boleto3 = new Boleto("003", 500.00, sdf.parse("2023-08-21"));

        processador.processarBoleto(fatura, boleto1);
        processador.processarBoleto(fatura, boleto2);
        processador.processarBoleto(fatura, boleto3);

        assertFalse(fatura.isPaga());
    }
}
