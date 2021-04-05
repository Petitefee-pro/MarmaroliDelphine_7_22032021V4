<template>  
  <div id="app" class="container-fluid">
    <nav>
      <ul class="nav justify-content-start nav-fill">
        <li class="nav-item">
          <router-link class="nav-link m-1 p-0 text-center text-white" to="/signup">S'incrire</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link m-1 p-0 text-white" to="/login">Se connecter</router-link> 
        </li>
        <li class="nav-item">
        <router-link class="nav-link m-1 p-0 text-white" to="/deconnect">Se déconnecter</router-link> 
        </li>
      </ul>  
    </nav>      
    <Header/>
    <router-view/> 
    <Footer/>
  </div>   
 
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'App',
    components: {
        Header,
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
.nav li:hover{
  font-weight: bold;  
  border-bottom: 1px solid white;
}
</style>
