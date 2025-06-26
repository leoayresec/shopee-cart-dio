export class Cart {
  constructor() {
    this.items = [];
  }

  async functionaddProduct(product, quantity = 1) {
    const existing = this.items.find((item) => item.product.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

 async removeProduct(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

 async updateQuantity(productId, newQuantity) {
    const item = this.items.find((item) => item.product.id === productId);
    if (item) {
      item.quantity = newQuantity;
      if (item.quantity <= 0) {
        this.removeProduct(productId);
      }
    }
  }

 async getTotal() {
    return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

 async showCart() {
    if (this.items.length === 0) {
      console.log("🛒 Seu carrinho está vazio!");
      return;
    }

    console.log("\n🛍️  Carrinho de Compras:");
    this.items.forEach(({ product, quantity }) => {
      console.log(`- ${product.name} x${quantity} = R$ ${(product.price * quantity).toFixed(2)}`);
    });
    console.log(`\n💰 Total: R$ ${this.getTotal().toFixed(2)}\n`);
  }

 async checkout() {
    this.showCart();
    console.log("✅ Compra finalizada. Obrigado por comprar conosco!");
    this.items = [];
  }
}
