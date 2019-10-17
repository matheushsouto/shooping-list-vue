<template>
  <router-link :to="'/product/' + product.id">
    <main :class="big ? 'big': ''">
      <img v-bind:src="product.thumb">
      <section>
          <strong>{{ product.price }}</strong>
          <small>{{ product.conditions }}</small>
        <span>{{ product.title }}</span>
      </section>
    </main>
  </router-link>
</template>

<script>
export default {
  name: "Product",
  props: ["product", "big"],
  data: function() {
    return {
      img: this.product.image
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
