import { Cliente } from "../Cliente.js";

// Classe abstrata
export class Conta {

    constructor(saldoInicial, cliente, agencia){

        
        this._saldo = saldoInicial;
        this.cliente = cliente;
        this.agencia = agencia;
        if(this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo conta.\nPois esta é uma classe abstrata\n");
        }
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    // Método abstrato
    sacar(valor){
        throw new Error("\nO método sacar da conta é abstrato.\n");
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}