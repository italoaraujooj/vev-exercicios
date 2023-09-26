package com.exercicio2.processadorboletos.models;

public class Fatura {
    private String nomeCliente;
    private double valorTotal;
    private String dataLimite;
    private double valorPago;
    private boolean paga;

    public Fatura(String nomeCliente, double valorTotal, String dataLimite) {
        this.nomeCliente = nomeCliente;
        this.valorTotal = valorTotal;
        this.dataLimite = dataLimite;
        this.valorPago = 0;
    }

    public void setPaga(){
        if (this.valorPago >= this.valorTotal){
            this.paga = true;
        } else this.paga = false;
    }

    public boolean isPaga(){
        return this.paga;
    }

    public void adicionarPagamento(Pagamento pagamento) {
        this.valorPago += pagamento.getValor();
        setPaga();
    }

    public String getNomeCliente() {
        return nomeCliente;
    }

    public void setNomeCliente(String nomeCliente) {
        this.nomeCliente = nomeCliente;
    }

    public double getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
    }

    public String getDataLimite() {
        return dataLimite;
    }

    public void setDataLimite(String dataLimite) {
        this.dataLimite = dataLimite;
    }

    public double getValorPago() {
        return valorPago;
    }

    public void setValorPago(double valorPago) {
        this.valorPago = valorPago;
    }
}

