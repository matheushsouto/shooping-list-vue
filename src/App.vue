<template>
  <div id="app">
    <NavBar/>

    <div class="container mt-4">
      <router-view/>
    </div>

    <Footer/>
  </div>
</template>
<script>
import NavBar from "./components/Navegacao/";
import Footer from "./components/Rodape/";

import api from "./api";

export default {
  components: {
    NavBar,
    Footer
  },
  async created() {
    const { data } = await api.get("/cart");

    this.$store.commit("ADD_CART", data);
  }
};
</script>

<style lang="scss" scoped>
@import "styles/global.scss";
</style>
