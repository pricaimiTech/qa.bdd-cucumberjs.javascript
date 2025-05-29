/**
 * @description Classe Pessoa com método para verificar se a pessoa é maior de idade.
 * @class Pessoa
 */
class Pessoa {

  /**
   * @description Construtor da classe Pessoa
   * @param {number|null} idade - Idade da pessoa (opcional)
   */
  constructor(idade = null){
    this.idade = idade;
    /**
     * @type {number}
     * @description Idade mínima para consumo de bebida alcoólica
     */
    this.IDADE_MINIMO = 18;
  }
  
  /**
   * @description Método para verificar se a pessoa é maior de idade para consumo de bebida alcoólica.
   * @param {number} idade - Idade a ser verificada
   * @returns {boolean} Retorna true se a idade for maior ou igual à idade mínima configurada, caso contrário retorna false.
   * @throws {Error} Lança um erro se a idade não for um número inteiro positivo.
   */
  ehMaiorDeIdade(idade) {
    if (idade === null) {
      throw new Error(`Idade informada: ${idade} anos. Deve ser um número inteiro`);
    }
    if (!Number.isInteger(idade)) {
      throw new Error(`Idade informada: ${idade} anos. Deve ser um número inteiro`);
    } else if (idade < 0) {
      throw new Error(`Idade informada: ${idade} anos. Não é permitido idade negativa`);
    }
    return idade >= this.IDADE_MINIMO;
  }
}

module.exports = Pessoa;