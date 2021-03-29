<template>  
  <div id="app">
    <div class="nav">
      <router-link to="/">Accueil</router-link>
      <router-link to="/api/user/signup">S'incrire</router-link>
      <router-link to="/api/user/login">Se connecter</router-link> 
    </div>  
      
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
h1{
    color: white;
    font-weight: bold;
    text-align: center;
}
.nav {
  width: 100%;
  
}
.nav router-link {
    display: flex;
    flex-direction: row;
    text-align: center;
    line-height: 40px;    
    height: 8%;
    width: 30%;
    padding-left: 10%;    
    color: white;
}    
.nav router-link:hover{
    font-weight: bold;
    border-bottom: 1px solid white;
    cursor: pointer;
    
}
.logo{
    display: flex;
    justify-content: center; 
    align-content: center;
    align-items: center;
    height: 50%;
    width: 90%;
    margin: 2%;
    padding-left: 2%;
}
</style>
