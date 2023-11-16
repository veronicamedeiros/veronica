package pacoteBank;

import java.util.Scanner;

public class Client {
    private String name;
    private int agencia;
    private int conta;

    private float saldo;

    private int numeroDeCadastro;

    static int numeroDeClientes = 0;

    public void setName(String palavra) {
        this.name = palavra;
    }

    public String getName(){
        return this.name;
    }

    public void setAgencia(int agencia){
        this.agencia = agencia;
    }

    public int getAgencia(){
        return this.agencia;
    }

    public void setConta(int conta){
        this.conta = conta;
    }

    public int getConta(){
        return this.conta;
    }


    public void setNumeroDeCadastro(){
        numeroDeClientes = numeroDeClientes + 1;
        this.numeroDeCadastro = numeroDeClientes;
    }

    public int getNumeroDeCadastro(){

        return this.numeroDeCadastro;
    }

    public void saldoIncial(float inical){
        this.saldo = inical;
    }

    public void fazerSaque(int saque){
        this.saldo = this.saldo - saque;
    }

    public void  fazerDeposito(int deposito){
        this.saldo = this.saldo + deposito;
    }

    public float mostrarSaldo(){
        return this.saldo;
    }

    public String toString(){
        return "Nome: " + name + ", " +
                "Agência: " + agencia + ", " +
                "Conta: " + conta + ", " +
                "Numero de cadastro: " + numeroDeCadastro + ", " +
                "Saldo: " + saldo;
    }


}

