<template>
  <div class="form-group  text-center">
        <button type="submit" :click="submitDeconnect" class="btn btn-primary btn-lg col-12 col-md-5 mt-3 mb-2">Déconnexion</button>
    </div> 
</template>

<script>
export default {
    name: 'App',
    methods:{
      submitDeconnect: function (){
        localStorage.clear();
        location.replace('http://localhost:8080')
      }
    }

}
</script>

<style>

</style>