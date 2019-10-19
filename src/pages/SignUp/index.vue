<template>
<div class="box-parent-login">
	<div class="well bg-white box-login">
		<h1 class="ls-login-logo">Registre-se</h1>
			<fieldset>
 
				<div class="form-group ls-login-user">
					<label for="userLogin">Usuário</label>
					<input class="form-control ls-login-bg-user input-lg" id="userLogin" type="text" aria-label="Usuário" placeholder="Usuário" v-model="email">
				</div>
 
				<div class="form-group ls-login-password">
					<label for="userPassword">Senha</label>
					<input class="form-control ls-login-bg-password input-lg" id="userPassword" type="password" aria-label="Senha" placeholder="Senha" v-model="senha">
				</div>
 				<button @click="signUp">Registrar</button>
			</fieldset>
	</div>
</div>
</template>

<script>

import firebase from 'firebase';
export default {
  name: 'signUp',
  data () {
    return {
      email: '',
      senha: '',
    };
  },
  methods: {
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.senha).then(
        (user) => {
            alert('Sua conta foi cadastrata com sucesso!')
          this.$router.replace('/'),
            alert('Sua conta foi cadastrata com sucesso!')
        },
        (err) => {
          alert('Aconteceu algo inesperado. ' + err.message)
        }
      );
    },
  },
};
</script>
