<template>
    <div class="form-row rounded bg-transparent shadow justify-content-center">
        <form id="login" @submit="checkForm" action="#" method="POST" class="row justify-content-center was-validated needs-validation" novalidate>
            <div class="form-group col-9 col-md-10 mb-0 pr-2 pl-2">
                <label for="email"></label> 
                <input type="email" name="email" id="email" class="form-control form-control-lg" placeholder="Email" v-model="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
                <div class="valid-feedback">Valide</div>
                <div class="invalid-feedback">Veuillez saisir un email</div>
            </div>
            <div class="form-group col-9 col-md-10 mb-0 pr-2 pl-2">
                 <label for="password"></label> 
                <input type="password" name="password" id="password" class="form-control form-control-lg" placeholder="Mot de passe" v-model="password" pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$" required>
                <div class="valid-feedback">Valide</div>
                <div class="invalid-feedback">Veuillez saisir un mot de passe fort contenant entre 8 et 15 caractères dont au moins 1 lettre mininuscule, 1 lettre majuscule, 1 chiffre et 1 caractère spécial</div>
            </div>
            <div class="form-group col-12 text-center m-2">
                <input type="button" value="Se connecter" class="btn btn-primary btn-lg mt-3 mb-2">
            </div>
            <p class="inscription text-center col-9 mb-5">
                Vous n'avez pas encore de compte, <a href="/Signup">inscrivez-vous</a>.
            </p>
        </form>
    </div>
</template>

<script>
export default ({
    name: 'login',
    
})
</script>

<style scoped lang="scss">
/*form{
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    align-items: center;
    margin: 20% 0 10% 0;
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
}*/
</style>
