<template>
  <div>
    <header>
      <h2>Carrinho</h2>
    </header>

    <div class="row">
      <ul class="col-md-8 mb-md-4 mb-3">
        <li v-for="product in products" :key="product.id">
          <section>
            <img :src="product.thumb" :alt="product.title">
            <div>
              <span>{{ product.title }}</span>
              <small>1 unidade</small>
            </div>
          </section>
          <strong>{{ product.price }}</strong>
        </li>
      </ul>

      <aside class="col-md-4 mb-md-4 mb-3">
        <span>Total da compra</span>
        <small>{{ count > 1 ? count +' Produtos': 'Somente um produto' }}</small>

        <strong>{{ total }}</strong>

        <button @click="buy">Finalizar compra</button>
      </aside>
    </div>
  </div>
</template>

<script>
import api from "../../api";

export default {
  name: "Cart",
  methods: {
    async buy() {
      let prods = [];
      prods = this.products.map(x => {
        return { ...x, stock: x.stock--, sold: x.sold-- };
      });

      await Promise.all(
        prods.map(product => {
          api.put(`/products/${product.id}`, product);
        })
      );

      await Promise.all(
        prods.map(product => {
          api.delete(`/cart/${product.id}`);
        })
      );

      //   this.$store.commit()
    }
  },
  computed: {
    products() {
      return this.$store.state.cart;
    },
    count() {
      return this.$store.state.qtd;
    },
    total() {
      let total = 0;
      this.$store.state.cart.forEach(x => {
        const price = Number(x.price.replace("R$ ", "").replace(",", "."));

        total += price;
      });

      return `R$ ${total.toFixed(2).replace(".", ",")}`;
    }
  }
};
</script>


<style lang="scss" scoped>
@import "./styles.scss";
</style>
