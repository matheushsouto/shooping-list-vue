<template>
  <main>
    <header>
      <div>
        <h2>{{ title }}</h2>
        {{ aside }}
      </div>
      <span>{{ description }}</span>
    </header>
    <section>
      <Product v-for="product in productsList" :key="product.id" :product="product"/>
    </section>
  </main>
</template>

<script>
import Product from "../../../../components/Product";

export default {
  name: "ProductList",
  props: ["title", "aside", "description", "products"],
  components: { Product },
  data: function() {
    return { productsList: this.products };
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
