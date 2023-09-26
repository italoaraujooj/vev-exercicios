package com.exercicio4.processadorboletos.services;

import com.exercicio4.processadorboletos.models.Boleto;
import com.exercicio4.processadorboletos.models.Fatura;
import com.exercicio4.processadorboletos.models.Pagamento;

public class ProcessadorBoletos {

    public void processarBoleto(Fatura fatura, Boleto boleto) {
        Pagamento pagamento = new Pagamento(boleto.getValorPago(), boleto.getData(), "BOLETO");
        if (!boleto.getData().after(fatura.getDataLimite())){
            fatura.adicionarPagamento(pagamento);
            if (fatura.getValorPago() > fatura.getValorTotal()){
                fatura.setCreditoProxFatura(fatura.getValorPago() - fatura.getValorTotal());
            }
        }
    }
}
