package com.exercicio2.processadorboletos.functionalTests;

import com.exercicio2.processadorboletos.models.Boleto;
import com.exercicio2.processadorboletos.models.Fatura;
import com.exercicio2.processadorboletos.services.ProcessadorBoletos;
import org.junit.Test;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

public class FunctionalTestsTD {

    @Test
    public void functionalTest01(){
        Fatura fatura = new Fatura("Cliente 1", 1500.00, "2023-09-10");

        assertFalse(fatura.isPaga());
    }

    @Test
    public void functionalTest02(){
        Fatura fatura = new Fatura("Cliente 1", 1500.00, "2023-09-10");
        ProcessadorBoletos processador = new ProcessadorBoletos();

        Boleto boleto1 = new Boleto("001", 400.00, "2023-08-19");
        Boleto boleto2 = new Boleto("002", 500.00, "2023-08-20");
        Boleto boleto3 = new Boleto("003", 600.00, "2023-08-21");

        assertFalse(fatura.isPaga());
    }

    @Test
    public void functionalTest03(){
        Fatura fatura = new Fatura("Cliente 1", 1500.00, "2023-09-10");
        ProcessadorBoletos processador = new ProcessadorBoletos();

        Boleto boleto1 = new Boleto("001", 400.00, "2023-08-19");
        Boleto boleto2 = new Boleto("002", 400.00, "2023-08-20");
        Boleto boleto3 = new Boleto("003", 400.00, "2023-08-21");

        processador.processarBoleto(fatura, boleto1);
        processador.processarBoleto(fatura, boleto2);
        processador.processarBoleto(fatura, boleto3);

        assertFalse(fatura.isPaga());
    }

    @Test
    public void functionalTest04(){
        Fatura fatura = new Fatura("Cliente 1", 1500.00, "2023-09-10");
        ProcessadorBoletos processador = new ProcessadorBoletos();

        Boleto boleto1 = new Boleto("001", 400.00, "2023-08-19");
        Boleto boleto2 = new Boleto("002", 500.00, "2023-08-20");
        Boleto boleto3 = new Boleto("003", 600.00, "2023-08-21");

        processador.processarBoleto(fatura, boleto1);
        processador.processarBoleto(fatura, boleto2);
        processador.processarBoleto(fatura, boleto3);

        assertTrue(fatura.isPaga());
    }
}
