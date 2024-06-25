# DIFERENÇA ENTRE TESTES UNITÁRIOS E TESTE E2E (END-TO-END)

## Testes Unitários
- Testes unitários são testes que verificam o comportamento de uma unidade de código, como uma função ou método, isoladamente.
- Podem verificar se uma função retorna o valor esperado, se uma função lança uma exceção quando deveria, etc.
- Eles são úteis para verificar se uma unidade de código está funcionando corretamente.

## Testes E2E (End-to-End)
- Testes E2E são testes que verificam o comportamento de um sistema como um todo.
- Podem simular a interação de um usuário com o sistema, como clicar em botões, preencher formulários, etc.
- Eles são úteis para verificar se o sistema como um todo está funcionando corretamente.


# COMO INSTALAR JEST PARA TESTES UNITÁRIOS EM APLICAÇÕES EXPO

## Instalando Jest

Para instalar o Jest em um projeto Expo, basta executar o seguinte comando:

```bash
yarn add -D jest-expo jest
```

## Configurando o Jest

// package.json
```json
{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "preset": "jest-expo",
    "transformIgnorePatterns": [
      "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
    ]
  }
}
```

## Rodando os testes

Para rodar os testes, basta executar o seguinte comando:

```bash

yarn test
```
