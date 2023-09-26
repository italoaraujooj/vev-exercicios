package com.exercicio4.processadorboletos.functionalTests;

import com.exercicio4.processadorboletos.models.Boleto;
import com.exercicio4.processadorboletos.models.Fatura;
import com.exercicio4.processadorboletos.services.ProcessadorBoletos;
import org.junit.Test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

public class FunctionalTestsAVL {

    private SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

    @Test
    public void functionalTest01() {
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
            Boleto boleto3 = new Boleto("003", 500.00, dataBoleto3);

            processador.processarBoleto(fatura, boleto1);
            processador.processarBoleto(fatura, boleto2);
            processador.processarBoleto(fatura, boleto3);

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

            Boleto boleto1 = new Boleto("001", 500.00, dataBoleto1);
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

    @Test
    public void functionalTest04() {
        try {
            Date dataFatura = sdf.parse("2023-09-10");
            Fatura fatura = new Fatura("Cliente 1", 1500.00, dataFatura);
            ProcessadorBoletos processador = new ProcessadorBoletos();

            Date dataBoleto1 = sdf.parse("2023-08-19");

            Boleto boleto1 = new Boleto("001", 1501.00, dataBoleto1);

            processador.processarBoleto(fatura, boleto1);

            assertTrue(fatura.isPaga());
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void functionalTest05() {
        try {
            Date dataFatura = sdf.parse("2023-09-10");
            Fatura fatura = new Fatura("Cliente 1", 1500.00, dataFatura);
            ProcessadorBoletos processador = new ProcessadorBoletos();

            Date dataBoleto1 = sdf.parse("2023-08-19");

            Boleto boleto1 = new Boleto("001", 1499.00, dataBoleto1);

            processador.processarBoleto(fatura, boleto1);

            assertFalse(fatura.isPaga());
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void functionalTest06() {
        try {
            Date dataFatura = sdf.parse("2023-09-10");
            Fatura fatura = new Fatura("Cliente 1", 1500.00, dataFatura);
            ProcessadorBoletos processador = new ProcessadorBoletos();

            Date dataBoleto1 = sdf.parse("2023-08-19");
            Date dataBoleto2 = sdf.parse("2023-08-19");

            Boleto boleto1 = new Boleto("001", 750.00, dataBoleto1);
            Boleto boleto2 = new Boleto("002", 750.00, dataBoleto2);

            processador.processarBoleto(fatura, boleto1);
            processador.processarBoleto(fatura, boleto2);

            assertTrue(fatura.isPaga());
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void functionalTest07() {
        try {
            Date dataFatura = sdf.parse("2023-09-10");
            Fatura fatura = new Fatura("Cliente 1", 1, dataFatura);
            ProcessadorBoletos processador = new ProcessadorBoletos();

            assertFalse(fatura.isPaga());
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
}
