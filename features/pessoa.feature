# language: pt
Funcionalidade: Validar idade do consumidor para liberação de bebida alcoólica
    Eu como um sistema verificador de idade
    Gostaria de validar se a pessoa possui idade minima para consumo de álcool
    Porque assim determino se ela pode consumir bebida alcoólica

  Esquema do Cenário: Verificar liberação do consumo de bebida alcoólica
    Dado que possuo <idade> anos de idade
    Quando verifico se ela pode consumir bebida alcoólica
    Então o sistema '<resultado>' o consumo de bebida alcoólica

    Exemplos:
      | idade | resultado   |
      |    16 | não permite |
      |    17 | não permite |
      |    18 | permite     |
      |    19 | permite     |
