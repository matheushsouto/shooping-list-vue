<template>
  <div>
    <main v-if="!loading">
      <header>
        <h2 v-text="this.title"></h2>
        <p v-text="this.description"></p>
      </header>

      <section class="d-none d-md-flex">
        <Product v-for="product in productsList" :key="product.id" :product="product" :big="true"/>
      </section>

      <section class="d-flex d-md-none justifyCenter">
        <Product v-for="product in productsList" :key="product.id" :product="product"/>
      </section>
    </main>

    <main v-if="loading">
      <header>
        <h2>Carregando...</h2>
        <p>Um instante enquanto carregamos os melhores produtos para voce!</p>
      </header>
    </main>
  </div>
</template>

<script>
import Product from "@/components/Product";

import api from "../../api";

export default {
  name: "Cattegorie",
  components: { Product },
  data() {
    return {
      id: null,
      title: "",
      description: "",
      loading: true,
      productsList: []
    };
  },
  watch: {
    $route({ params: { id } }) {
      this.getProducts(id);
    }
  },
  created() {
    this.getProducts(this.$route.params.id);
  },
  methods: {
    async getProducts(id) {
      const { data } = await api.get(`/products?platform=${id}`);
      this.productsList = data;

      this.title = id == 1 ? "Maquiagem" : "Perfumaria";
      this.description =
        id == 1
          ? "Expresse sua beleza com produtos especiais..."
          : "Fragrâncias com igredientes naturais exclusivos do Brasil...";

      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
