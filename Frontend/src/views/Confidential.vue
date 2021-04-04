<template>
   <div class="accueil-forum justify-content-between">  
       <h1 class="text-center text-white mb-4">Forums</h1>
       <ul class="nav  nav-fill">
        <li class="nav-item bg-secondary mb-4">
          <router-link class="nav-link text-white font-weight-bold" to="/form-texte">FORUM TEXTE</router-link>
          <p>Venez partager un petit message avec vos collègues</p>
        </li>
        <li class="nav-item bg-secondary mb-4">
        <router-link class="nav-link text-white font-weight-bold" to="/forum-multimedia">FORUM MULTIMEDIA</router-link> 
        <p>Venez partager un multimédia avec vos collègues</p>
        </li>
      </ul>  
    </div>
</template>

<script>
export default {
    name: 'forum',
}
</script>

<style scoped>
.accueil-forum li{
    border-radius: 2px 3px blue;
}
</style>>