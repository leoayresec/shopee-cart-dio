import readline from "readline";
import { Cart } from "./service/cart.js";
import { products } from "./service/product.js";

const cart = new Cart();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log(`
========== 🛒 MENU ==========
1. Ver produtos
2. Adicionar produto ao carrinho
3. Remover produto do carrinho
4. Alterar quantidade de um produto
5. Ver carrinho
6. Finalizar compra
0. Sair
=============================
`);
}

function promptMenu() {
  showMenu();
  rl.question("Escolha uma opção: ", (option) => {
    switch (option) {
      case "1":
        console.log("\n📦 Produtos disponíveis:");
        products.forEach((p) =>
          console.log(`${p.id}. ${p.name} - R$ ${p.price.toFixed(2)}`)
        );
        promptMenu();
        break;
      case "2":
        rl.question("Digite o ID do produto: ", (id) => {
          const product = products.find((p) => p.id == id);
          if (!product) {
            console.log("❌ Produto não encontrado!");
            return promptMenu();
          }
          rl.question("Quantidade: ", (qtd) => {
            cart.addProduct(product, parseInt(qtd));
            console.log("✅ Produto adicionado ao carrinho.");
            promptMenu();
          });
        });
        break;
      case "3":
        rl.question("Digite o ID do produto para remover: ", (id) => {
          cart.removeProduct(parseInt(id));
          console.log("🗑️ Produto removido.");
          promptMenu();
        });
        break;
      case "4":
        rl.question("Digite o ID do produto: ", (id) => {
          rl.question("Nova quantidade: ", (qtd) => {
            cart.updateQuantity(parseInt(id), parseInt(qtd));
            console.log("✏️ Quantidade atualizada.");
            promptMenu();
          });
        });
        break;
      case "5":
        cart.showCart();
        promptMenu();
        break;
      case "6":
        cart.checkout();
        promptMenu();
        break;
      case "0":
        console.log("👋 Saindo...");
        rl.close();
        break;
      default:
        console.log("❌ Opção inválida.");
        promptMenu();
    }
  });
}

console.clear();
console.log("Bem-vindo ao Shopee Terminal 🛒");
promptMenu();
