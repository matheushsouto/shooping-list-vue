<template>
  <div>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark pt-2 pb-2 bg">
      <div class="container d-flex justify-content-between">
        <router-link class="navbar-brand" to="/">
          <img
            src="@/assets/logo.png"
            width="38"
            height="38"
            class="d-inline-block align-top"
            alt="logo"
          />
          Ellus Cosméticos e Perfumaria
        </router-link>

        <form class="col-7 input-group d-none d-md-flex">
          <input
            class="form-control form-control-sm"
            type="search"
            placeholder="O que você procura?"
          >
          <div class="input-group-append">
            <button class="btn btn-sm btn-light" type="button">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </form>

        <div>
          <button type="button" class="btn btn-md icons">
            <div v-if="count > 0" class="badge-danger badge">{{ count }}</div>
            <i class="fa fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </nav>

    <ul class="nav pt-2 justify-content-center">
      <li class="nav-item">
        <router-link class="nav-link customLink" to="/cattegorie/2">Perfumaria</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link customLink" to="/cattegorie/1">Maquiagem</router-link>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    count() {
      return this.$store.state.qtd;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
