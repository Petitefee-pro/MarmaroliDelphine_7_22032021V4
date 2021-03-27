<template>  
  <div class="nav">
    <div class="">
      <router-link to="/">Accueil</router-link>
      <router-link to="/api/user/signup">S'incrire</router-link>
      <router-link to="/api/user/login">Se connecter</router-link> 
    </div>  
    <router-view/>   
    <div class="">
      <img class="logo " src='@/assets/images/icon-left-font-monochrome-white-redimensionné.png' alt="logo Groupomania">    
    </div>  
    <div class="">
      <h1>Bienvenue sur le réseau social de l'entreprise</h1>
      <Footer/>
    </div> 
  </div>   
 
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
    name: 'App',
    components: {
        Footer,        
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
router-link {
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
