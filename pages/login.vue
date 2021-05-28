<template>
  <div class="signin">
    <h2>Sign in</h2>
    <input type="text" placeholder="Address" v-model="address">
    <input type="password" placeholder="Password" v-model="password">
    <div>
    <button @click="signIn" style="float:left;">Signin</button>
    <i class="fab fa-google" @click="googleLogin" style="cursor : pointer;float:right;"></i>
    </div>
    <p>You don't have an account? 
      <nuxt-link to="/signup">create account now!!</nuxt-link>
    </p>
  </div>
</template>

<script>

export default {
  name: 'Signin',
  data: function () {
    return {
      address: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      this.$store.dispatch('user/signInMail', { address: this.address, password: this.password })
    },
    googleLogin: function() {
      this.$store.dispatch('user/signInGoogle')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signin {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>