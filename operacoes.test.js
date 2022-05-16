const chai = require('chai');
const operacoes = require('./operacoes');

const assert = chai.assert;

describe("Testes unitários de uma calculadora", () => {
  it("Teste: Soma de 2 números", () => {
    assert.equal(operacoes.soma(20, 20), 40);
  });

  it("Teste: Subtração de 2 números", () => {
    assert.equal(operacoes.subtracao(25, 5), 20);
  });

  it("Teste: Multiplicação de 2 números", () => {
    assert.equal(operacoes.multiplicacao(9, 9), 81);
  });

  it("Teste: Divisão de 2 números", () => {
    assert.equal(operacoes.divisao(100, 10), 10);
  });

  it("Teste: Cálculo de porcentagem", () => {
      assert.equal(operacoes.porcentagem(200, 100), 2)
  })
});