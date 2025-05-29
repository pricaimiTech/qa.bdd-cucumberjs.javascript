const {
    Given,
    When,
    Then
} = require('@cucumber/cucumber')
const {
    expect
} = require('chai')
const Pessoa = require('./../../src/Pessoa.js');

let pessoa
let idade
let resultado

Given('que possuo {int} anos de idade', function (inputIdade) {
    pessoa = new Pessoa()
    idade = inputIdade
})

When('verifico se ela pode consumir bebida alcoólica', function () {
    resultado = pessoa.ehMaiorDeIdade(idade);
})

Then('o sistema {string} o consumo de bebida alcoólica', function (resultadoValidacao) {
    if (resultadoValidacao === 'permite') {
        expect(resultado).to.be.true;
    } else if (resultadoValidacao === 'não permite') {
        expect(resultado).to.be.false;
    }
})
