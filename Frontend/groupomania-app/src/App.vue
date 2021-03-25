<template>
  <div>
    <Navigation/>
    <Signup/>
    <Login/>
    <Unsubscribe/>
    <Footer/>
  </div>  
</template>

<script>
import Navigation from './components/Navigation.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import Footer from './components/Footer.vue'
import Unsubscribe from './components/Unsubscribe.vue'

export default {
  name: 'App',
  components: {
    Navigation, 
    Signup,
    Login,
    Footer,
    Unsubscribe
  }
}
</script>

<style lang="scss">
body {
  margin: 0 auto;
  background-color: #3762AF;
}
#app {
  margin: 0 auto
}  
</style>
