<template>
    <nav class="nav">
        <div>
            <span>
                <a @click="goSignup">S'inscrire</a>
                <a @click="goLogin">Se connecter</a>                
            </span>
        </div>        
        <router-view></router-view>    
        <img src='../assets/images/icon-left-font-monochrome-white-redimensionné.png' alt="logo Groupomania">
    </nav> 
</template>

<script>

export default {
  name: 'Navigation', 
  methods: {
      goSignup () {
          this.$router.replace('/signup')
      },
      goLogin () {
          this.$router.replace('/login')
      },
  }
}
</script>

<style scoped lang="scss">
.nav{    
    height: 20%;
    width: 100%;
}
.nav div{
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    padding-left: 10%;
    height: 5%;
    padding-bottom: 5%;
}
.nav toolbar{
    justify-content: space-between;
    align-items: flex-end;
    text-align: center;
    line-height: 30px;
    width: 30%;
}    
.nav toolbar:hover{
    font-weight: bold;
    border-bottom: 1px solid white;
}
.nav img{
    display: flex;
    justify-content: center; 
    height: 25%;
    width: 90%;
    margin-top: 2%;
}
toolbar{
    color: white;
    text-decoration: none;
}
</style>
