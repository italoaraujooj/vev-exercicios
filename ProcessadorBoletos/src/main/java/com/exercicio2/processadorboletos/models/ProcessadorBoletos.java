package com.exercicio2.processadorboletos.models;

public class ProcessadorBoletos {

    public void processarBoleto(Fatura fatura, Boleto boleto) {
        Pagamento pagamento = new Pagamento(boleto.getValorPago(), boleto.getData(), "BOLETO");
        fatura.adicionarPagamento(pagamento);
    }
}
