package com.exercicio4.processadorboletos.models;

import java.util.Date;

public class Pagamento {
    private double valor;
    private Date data;
    private String tipo;

    public Pagamento(double valor, Date data, String tipo) {
        this.valor = valor;
        this.data = data;
        this.tipo = tipo;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}
