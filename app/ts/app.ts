import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();

//Para adaptação foi utilizado tsd para usar JQuery junto ao TypeScript
//tsd(TypeScript Definition)

$('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));