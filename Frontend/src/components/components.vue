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
import Footer from './components/Footer.vue'
import Login from './components/Login.vue'
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