import { Negociacao } from './Negociacao';

export class Negociacoes {

    // pode se escrever o Array<Negociacao> como Negociacao[]
    private _negociacoes: Array<Negociacao> = []

    adiciona(negociacao: Negociacao): void {
        
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[]{

        return [].concat(this._negociacoes);
    }
}