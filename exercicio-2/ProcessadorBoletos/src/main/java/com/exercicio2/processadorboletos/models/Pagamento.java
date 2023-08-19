package com.exercicio2.processadorboletos.models;

public class Pagamento {
    private double valor;
    private String data;
    private String tipo;

    public Pagamento(double valor, String data, String tipo) {
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

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}
