import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    
    // O _ indica que o atributo é privado
    // O JS ainda não reconhece isso de verdade, então é mais pro programador se ligar etc
    // Pq dá pra mudar fora da classe etc (o # muda isso, mas ainda não é 100% implementado)
    _cliente;
    _saldo = 0;

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(cliente, agencia) {
        this.agencia = agencia;
        this.cliente = cliente; // usa o acessor ( o get ali)
        // Chama o atributo estático
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    
}