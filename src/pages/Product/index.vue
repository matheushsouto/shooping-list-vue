<template>
  <div>
    <main v-if="!loading" class="container-fluid text-center text-md-left">
      <h2>{{ product.title }}</h2>

      <section class="row">
        <div class="col-md-12 col-lg-8 mb-md-4 mb-3 left">
          <aside class="d-none d-lg-flex">
            <img
              v-for="({id, url, selected}, index) in product.images"
              @mouseover="updateImage(index)"
              :class="selected ? 'selected': ''"
              :key="id"
              :src="url"
              :alt="product.title"
            >
          </aside>
          <div class="imageContainer">
            <img :src="image" :alt="product.title">

            <aside class="d-md-flex d-lg-none listDown">
              <img
                v-for="({id, url, selected}, index) in product.images"
                @mouseover="updateImage(index)"
                :class="selected ? 'selected': ''"
                :key="id"
                :src="url"
                :alt="product.title"
              >
            </aside>
          </div>
        </div>

        <aside class="col-md-4 mb-md-4 mb-3 d-none d-lg-flex right">
          <header>
            <small>{{ product.sold }} vendidos</small>
            <span v-if="product.stock >= 5">{{ product.stock }} unidades</span>
            <span v-else-if="product.stock > 1 && product.stock < 10">Últimas unidades</span>
            <span v-else-if="product.stock === 1">Última unidade</span>
            <span v-else class="soldOut">Sem unidades</span>
          </header>
          <span class="title">{{ product.title }}</span>
          
          <p>{{ product.shortDescription }}</p>

          <select
            v-model="items"
            placeholder="Quantidade"
            class="form-control form-control-sm mt-2"
          >
            <option disabled value>Selecione a quantidade</option>
            <option v-for="qtd in product.stock" :key="qtd">{{ qtd }}</option>
          </select>

          <button v-if="product.stock !== 0" v-on:click="addToCart">Adicionar ao carrinho</button>

          <strong v-if="product.stock === 0">
            Acabou o produto
            {{ product.title }}
          </strong>
        </aside>
      </section>

      <aside class="d-md-flex d-lg-none right top">
        <header>
          <small>{{ product.sold }} vendidos</small>
          <span v-if="product.stock >= 5">{{ product.stock }} unidades</span>
          <span v-else-if="product.stock > 1 && product.stock < 10">Últimas unidades</span>
          <span v-else-if="product.stock === 1">Última unidade</span>
          <span v-else class="soldOut">Sem unidades</span>
        </header>

        <span class="title">{{ product.title }}</span>

        <p>{{ product.shortDescription }}</p>

        <select v-model="items" placeholder="Quantidade" class="form-control form-control-sm mt-3">
          <option disabled value>Selecione a quantidade</option>
          <option v-for="qtd in product.stock" :key="qtd">{{ qtd }}</option>
        </select>

        <button v-if="product.stock !== 0" v-on:click="addToCart">Adicionar ao carrinho</button>

        <strong v-if="product.stock === 0">
          Acabou o produto
          {{ product.title }}
        </strong>
      </aside>

      <hr class="clearfix w-100 pb-3 d-md-none">
    </main>

    <main v-if="loading">
      <h2>Carregando...</h2>
      <p>Um instante enquanto carregamos os produtos para voce!</p>
    </main>
  </div>
</template>

<script>
import api from "../../api";

export default {
  name: "Product",
  props: ["id"],
  data: () => {
    return {
      items: 0,
      product: {},
      loading: true,
      selectedImage: 0
    };
  },
  methods: {
    updateImage(index) {
      if (index === this.selectedImage) return;

      this.product.images[this.selectedImage].selected = false;
      this.selectedImage = index;
      this.product.images[index].selected = true;
    },
    async addToCart() {
      if (this.product.stock === 0 || this.items === 0) return;
      this.product.stock -= this.items;
      this.product.sold = Number(this.product.sold) + Number(this.items);
      this.items = 0;

      const cart = this.$store.state.cart;

      const exists = cart.findIndex(({ id }) => id === this.product.id);

      if (exists === -1) {
        this.$store.commit("ADD_ITEM", this.product.id);

        await api.post("cart", this.product);
      }

      api.put(`/products/${this.product.id}`, this.product);
    }
  },
  computed: {
    image() {
      return this.product.images[this.selectedImage].url;
    }
  },
  async created() {
    const { data } = await api.get(`/products/${this.id}`);
    this.product = data;

    this.product.images[this.selectedImage].selected = true;

    this.loading = false;
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
