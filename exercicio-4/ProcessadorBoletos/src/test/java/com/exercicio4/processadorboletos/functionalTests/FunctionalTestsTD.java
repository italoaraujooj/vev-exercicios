package com.exercicio4.processadorboletos.functionalTests;

import com.exercicio4.processadorboletos.models.Boleto;
import com.exercicio4.processadorboletos.models.Fatura;
import com.exercicio4.processadorboletos.services.ProcessadorBoletos;
import org.junit.Test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

public class FunctionalTestsTD {

    private SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

    @Test
    public void functionalTest01() {
        try {
            Date dataFatura = sdf.parse("2023-09-10");
            Fatura fatura = new Fatura("Cliente 1", 1500.00, dataFatura);

            assertFalse(fatura.isPaga());
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void functionalTest02() {
        try {
            Date dataFatura = sdf.parse("2023-09-10");
            Fatura fatura = new Fatura("Cliente 1", 1500.00, dataFatura);
            ProcessadorBoletos processador = new ProcessadorBoletos();

            Date dataBoleto1 = sdf.parse("2023-08-19");
            Date dataBoleto2 = sdf.parse("2023-08-20");
            Date dataBoleto3 = sdf.parse("2023-08-21");

            Boleto boleto1 = new Boleto("001", 400.00, dataBoleto1);
            Boleto boleto2 = new Boleto("002", 500.00, dataBoleto2);
            Boleto boleto3 = new Boleto("003", 600.00, dataBoleto3);

            assertFalse(fatura.isPaga());
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void functionalTest03() {
        try {
            Date dataFatura = sdf.parse("2023-09-10");
            Fatura fatura = new Fatura("Cliente 1", 1500.00, dataFatura);
            ProcessadorBoletos processador = new ProcessadorBoletos();

            Date dataBoleto1 = sdf.parse("2023-08-19");
            Date dataBoleto2 = sdf.parse("2023-08-20");
            Date dataBoleto3 = sdf.parse("2023-08-21");

            Boleto boleto1 = new Boleto("001", 400.00, dataBoleto1);
            Boleto boleto2 = new Boleto("002", 400.00, dataBoleto2);
            Boleto boleto3 = new Boleto("003", 400.00, dataBoleto3);

            processador.processarBoleto(fatura, boleto1);
            processador.processarBoleto(fatura, boleto2);
            processador.processarBoleto(fatura, boleto3);

            assertFalse(fatura.isPaga());
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void functionalTest04() {
        try {
            Date dataFatura = sdf.parse("2023-09-10");
            Fatura fatura = new Fatura("Cliente 1", 1500.00, dataFatura);
            ProcessadorBoletos processador = new ProcessadorBoletos();

            Date dataBoleto1 = sdf.parse("2023-08-19");
            Date dataBoleto2 = sdf.parse("2023-08-20");
            Date dataBoleto3 = sdf.parse("2023-08-21");

            Boleto boleto1 = new Boleto("001", 400.00, dataBoleto1);
            Boleto boleto2 = new Boleto("002", 500.00, dataBoleto2);
            Boleto boleto3 = new Boleto("003", 600.00, dataBoleto3);

            processador.processarBoleto(fatura, boleto1);
            processador.processarBoleto(fatura, boleto2);
            processador.processarBoleto(fatura, boleto3);

            assertTrue(fatura.isPaga());
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
}
