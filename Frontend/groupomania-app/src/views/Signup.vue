<template>
    <div>
        <form id="signup" @submit="checkForm" action="#" method="post">
            <p>
                <label for="identifiant"></label> 
                <input type="text" name="identifiant" id="identifiant" placeholder="Identifiant" v-model="identifiant">
            </p>
            <p>
                <label for="pseudo"></label> 
                <input type="text" name="pseudo" id="pseudo" placeholder="Pseudonyme" v-model="pseudo">
            </p>
            <p>
                <label for="email"></label> 
                <input type="email" name="email" id="email" placeholder="Email" v-model="email">
            </p>
            <p>
                <label for="password"></label> 
                <input type="password" name="password" id="password" placeholder="Mot de passe" v-model="email">
            </p>
            <p>
                <input type="submit" value="S'inscrire">
            </p>
        </form>
    </div>
</template>

<script>

export default ({
    name: 'signup',
})
</script>

<style scoped lang="scss">
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
</style>
