export class Negociacao {

    //definir atributos de classe de modo n verboso.
    constructor(
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number
    ){}

    get data(): Date{

        return this._data;
    }

    get quantidade(): number{

        return this._quantidade;
    }

    get valor(): number{

        return this._valor;
    }

    get volume(): number{

        return this._quantidade * this._valor;
    }

}