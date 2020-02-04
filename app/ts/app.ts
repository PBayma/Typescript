import { NegociacaoController } from './controllers/index';

const controller = new NegociacaoController();

//Para adaptação foi utilizado tsd para usar JQuery junto ao TypeScript
//tsd(TypeScript Definition)

$('.form')
    .submit(controller.adiciona.bind(controller));