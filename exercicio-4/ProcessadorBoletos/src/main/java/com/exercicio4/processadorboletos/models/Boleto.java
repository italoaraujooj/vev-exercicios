package com.exercicio4.processadorboletos.models;

import java.util.Date;

public class Boleto {
    private String codigo;
    private double valorPago;
    private Date data;

    public Boleto(String codigo, double valorPago, Date data) {
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

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }
}
