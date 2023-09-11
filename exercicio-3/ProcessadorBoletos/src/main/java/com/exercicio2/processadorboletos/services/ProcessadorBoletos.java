package com.exercicio2.processadorboletos.services;

import com.exercicio2.processadorboletos.models.Boleto;
import com.exercicio2.processadorboletos.models.Fatura;
import com.exercicio2.processadorboletos.models.Pagamento;

public class ProcessadorBoletos {

    public void processarBoleto(Fatura fatura, Boleto boleto) {
        Pagamento pagamento = new Pagamento(boleto.getValorPago(), boleto.getData(), "BOLETO");
        fatura.adicionarPagamento(pagamento);
    }
}
