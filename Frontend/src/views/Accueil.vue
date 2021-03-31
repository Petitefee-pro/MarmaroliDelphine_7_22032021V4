<template>
    <div class="accueil row justify-content-center align-items-center m-4 m-md-5">
      <h1 class="col-12 col-md-9 col-lg-8 text-center text-white font-weight-bold">Bienvenue sur le réseau social de l'entreprise</h1>
    </div> 
</template>

<script>

export default {
    name: 'Accueil',
    
}
</script>

<style scoped>
.accueil{
    text-shadow: 10px 10px 2px rgb(51, 85, 150);    
}
h1{
    font-size: 50px;
}
@media screen and (min-width: 768px) and (max-width: 2500px) {
    .accueil{
        height: 600px;        
    }
    h1{
    font-size: 70px;
    }
}
</style>