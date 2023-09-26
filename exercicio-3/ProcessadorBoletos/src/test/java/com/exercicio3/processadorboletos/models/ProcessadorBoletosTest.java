package com.exercicio2.processadorboletos.models;

import com.exercicio2.processadorboletos.services.ProcessadorBoletos;
import org.junit.Test;
import static org.junit.Assert.*;

public class ProcessadorBoletosTest {

    @Test
    public void processadorDeveMarcarFaturaComoPaga() {
        Fatura fatura = new Fatura("Cliente 1", 1500.00, "2023-09-10");
        ProcessadorBoletos processador = new ProcessadorBoletos();

        Boleto boleto1 = new Boleto("001", 500.00, "2023-08-19");
        Boleto boleto2 = new Boleto("002", 600.00, "2023-08-20");
        Boleto boleto3 = new Boleto("003", 600.00, "2023-08-21");

        processador.processarBoleto(fatura, boleto1);
        processador.processarBoleto(fatura, boleto2);
        processador.processarBoleto(fatura, boleto3);

        assertTrue(fatura.isPaga());
    }

    @Test
    public void processadorDeveMarcarFaturaComoNaoPaga() {
        Fatura fatura = new Fatura("Cliente 1", 1500.00, "2023-09-10");
        ProcessadorBoletos processador = new ProcessadorBoletos();

        Boleto boleto1 = new Boleto("001", 500.00, "2023-08-19");
        Boleto boleto2 = new Boleto("002", 400.00, "2023-08-20");
        Boleto boleto3 = new Boleto("003", 500.00, "2023-08-21");

        processador.processarBoleto(fatura, boleto1);
        processador.processarBoleto(fatura, boleto2);
        processador.processarBoleto(fatura, boleto3);

        assertFalse(fatura.isPaga());
    }
}