<template>
  <div class="app">
    <nav id="nav">
        <div>
            <a href="/signup">S'inscrire</a>
            <a href="/login">Se connecter</a>
            <a href="/forum">Forum</a>
        </div>            
        <img src='../assets/images/icon-left-font-monochrome-white-redimensionné.png' alt="logo Groupomania">
    </nav>
  </div>  
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss">
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
.nav a{
    justify-content: space-between;
    align-items: flex-end;
    text-align: center;
    line-height: 30px;
    width: 30%;
}    
.nav a:hover{
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
a{
    color: white;
    text-decoration: none;
}
</style>
