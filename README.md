# Lista de Compras (CheckPoint 2)

App React Native (Expo) de lista de compras simples, feito para o CheckPoint 2 de Cross-Platform Application Development.

- Título do app
- `TextInput` para digitar um novo item
- Botão **Adicionar** que insere o item na lista com `useState`, criando um array novo com o spread operator (`[...itens, novoItem]`), sem `.push()`
- Lista exibida com `FlatList`

## Como rodar

```bash
npm install
npx expo start
```

Pressione `w` para abrir no navegador, `a` para o emulador Android, ou leia o QR code com o Expo Go.

## Prints

| Lista vazia | 1 item | 5 itens |
|---|---|---|
| ![](prints/1-lista-vazia.png) | ![](prints/2-um-item.png) | ![](prints/3-cinco-itens.png) |
