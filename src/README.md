# 🛒 Terminal Shopee Cart – Node.js ESM

Sistema de carrinho de compras simples e funcional inspirado no projeto https://github.com/digitalinnovationone/formacao-nodejs/tree/main/06-shopee-cart da DIO, totalmente executado no terminal. Desenvolvido com Node.js usando ES Modules (ESM), sem interface gráfica – apenas lógica de backend e entrada via terminal.

---

## ✨ Funcionalidades

- ✅ Listagem de produtos disponíveis
- ➕ Adição de produtos ao carrinho
- ➖ Remoção de produtos do carrinho
- ✏️ Atualização da quantidade de itens
- 📦 Visualização detalhada do carrinho
- 💳 Finalização da compra com total calculado

---

## 📁 Estrutura do Projeto

```
shopping-cart/
├── cart.js         # Lógica principal do carrinho
├── product.js      # Catálogo estático de produtos
└── index.js        # Entrada principal (menu via terminal)
```

---

## 🚀 Como rodar

### 1. Clone o projeto

```bash
git clone https://github.com/leoayresec/shopee-cart-dio.git
cd shopee-terminal-cart
```

### 2. Inicialize o `package.json`

```bash
npm init -y
```

Em seguida, edite o `package.json` e adicione:

```json
{
  "type": "module"
}
```

### 3. Execute

```bash
node index.js
```

---

## 📦 Catálogo de produtos mockado

| ID | Produto             | Preço (R$) |
|----|---------------------|------------|
| 1  | Fone Bluetooth      | 99,90      |
| 2  | Carregador Rápido   | 49,50      |
| 3  | Capinha Silicone    | 25,00      |
| 4  | Película de Vidro   | 15,90      |
| 5  | Suporte Veicular    | 35,00      |

---

## 💻 Exemplo de execução

```
========== 🛒 MENU ==========
1. Ver produtos
2. Adicionar produto ao carrinho
3. Remover produto do carrinho
4. Alterar quantidade de um produto
5. Ver carrinho
6. Finalizar compra
0. Sair
=============================
Escolha uma opção:
```

---

## 🎯 Objetivo

Projeto voltado para aprendizado e prática com:

- Lógica de carrinho no backend
- Uso do `readline` no terminal
- Manipulação de arrays/objetos
- Node.js com ES Modules
- Simulação de uma compra no terminal

---

## 📌 Possíveis melhorias futuras

- 💾 Persistência em arquivo `.json` ou banco (SQLite, MongoDB)
- 🎟️ Aplicação de cupons de desconto
- 👤 Autenticação e múltiplos usuários
- 🧾 Geração de recibo em `.txt` ou `.pdf`

---

> Desenvolvido com 💻 por Leonardo Ayres.  
