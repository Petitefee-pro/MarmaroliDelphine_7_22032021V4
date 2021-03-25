<template>
    <main>
        <form id="login" @submit="checkForm" action="#" method="post">
            <p>
                <label for="email"></label> 
                <input type="email" name="email" id="email" placeholder="Email" v-model="email">
            </p>
            <p>
                <label for="password"></label> 
                <input type="password" name="password" id="password" placeholder="Mot de passe" v-model="email">
            </p>
            <p>
                <input type="submit" value="Se connecter">
            </p>
            <p class="inscription">
                Vous n'avez pas encore de compte, <a href="/Signup">inscrivez-vous</a>.
            </p>
        </form>
    </main>
</template>

<script>
export default ({
    name: 'Login'
})
</script>

<style lang="scss">
form{
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    align-items: center;
}
input{
    border-radius: 20px 20px 20px 20px;
    box-shadow: 5px 5px 2px #2F5395;
    text-align: center;
    line-height: 30px;
    font-weight: bold;    
}
.inscription{
    color: white;
}
.inscription a:hover{
    font-weight: bold;
    text-decoration: white;
}
</style>
