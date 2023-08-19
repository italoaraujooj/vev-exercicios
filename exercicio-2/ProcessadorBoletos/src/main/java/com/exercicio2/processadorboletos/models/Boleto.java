package com.exercicio2.processadorboletos.models;

public class Boleto {
    private String codigo;
    private double valorPago;
    private String data;

    public Boleto(String codigo, double valorPago, String data) {
        this.codigo = codigo;
        this.valorPago = valorPago;
        this.data = data;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public double getValorPago() {
        return valorPago;
    }

    public void setValorPago(double valorPago) {
        this.valorPago = valorPago;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
