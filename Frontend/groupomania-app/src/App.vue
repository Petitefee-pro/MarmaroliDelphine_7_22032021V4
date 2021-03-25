<template>
  <div>
    <Navigation/>
    <Main/>
    <Footer/>
  </div>  
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation, 
    Footer
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
