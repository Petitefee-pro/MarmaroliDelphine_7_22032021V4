<template>
    <footer class="footer">
        <div>
            <a href="#">Politique de confidentialité</a>
            <a href="#">Réglement du forum</a>
            <a href="#">Désinscription</a>
            <a href="mailto:groupomania@reseau-social.fr">Contact</a>                
        </div>
    </footer>
</template>

<script> 
export default {
  name: 'Footer'  
}
</script>

<style scoped lang="scss" >
.footer{    
    height: 20%;
    width: 100%;
}
.footer div{
    display: flex;
    flex-flow: column wrap;
    height: 5%;
}
.footer a{
    justify-content: space-between;
    align-items: center;
    text-align: center;
    line-height: 30px;
    width: 100%;
}    
.footer a:hover{
    font-weight: bold;
}
a{
    color: white;
    text-decoration: none;
}
</style>
