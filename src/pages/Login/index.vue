<template>
<div class="box-parent-login">
	<div class="well bg-white box-login">
		<h1 class="ls-login-logo">Bem vindo</h1>
			<fieldset>
 
				<div class="form-group ls-login-user">
					<label for="userLogin">Usuário</label>
					<input class="form-control ls-login-bg-user input-lg" id="userLogin" type="text" aria-label="Usuário" placeholder="Usuário" v-model="email"> 
				</div>
 
				<div class="form-group ls-login-password">
					<label for="userPassword">Senha</label>
					<input class="form-control ls-login-bg-password input-lg" id="userPassword" type="password" aria-label="Senha" placeholder="Senha" v-model="senha">
				</div>
 
				<a href="#" class="ls-login-forgot">Esqueci minha senha</a>
				<br>
				<button @click="login" >Entrar</button>
				<p class="txt-center ls-login-signup">Não possui um cadastro na Ellu's Cosméticos?
					<router-link to="/signup">Cadastre-se agora!</router-link>
				</p>

			</fieldset>
	</div>
</div>
</template>

<script>import firebase from 'firebase';
export default {
  name: "login",
  data () {
    return {
      email: '',
      senha: ''
    };
  },
   methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(
          (user) => {
            this.$router.replace('home')
            alert('Login Efetuado com sucesso!')
          },
          (err) => {
            alert('Não foi possível realizar o login. ' + err.message)
          }
        );
      }
    }
  }
</script>