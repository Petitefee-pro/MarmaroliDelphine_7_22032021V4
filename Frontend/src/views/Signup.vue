<template>
    <div class="form-row rounded bg-transparent shadow">    
        <form id="signup" @submit="checkForm" action="#" method="POST" class="row justify-content-center was-validated needs-validation pl-4" novalidate>
            <div class="form-group col-9 col-md-10 m-0">
                <label for="identifiant"></label> 
                <input type="text" name="identifiant" id="identifiant" class="form-control rounded form-control-lg" placeholder="Identifiant" v-model="identifiant" pattern="[0-9]{4}" required>
                <div class="valid-feedback">Valide</div>
                <div class="invalid-feedback">Veuillez saisir votre identifiant de salarié</div>
            </div>
            <div class="form-group col-9 col-md-10 m-0">
                <label for="pseudo"></label> 
                <input type="text" name="pseudo" id="pseudo" class="form-control form-control-lg" placeholder="Pseudonyme" v-model="pseudo" pattern="[A-Za-z\s\-éöàäèüáúóêûîôâ']{2,10}" required>
                <div class="valid-feedback">Valide</div>
                <div class="invalid-feedback">Veuillez saisir un pseudonyme</div>
            </div>
            <div class="form-group col-9 col-md-10 m-0">
                <label for="email"></label> 
                <input type="email" name="email" id="email" class="form-control form-control-lg" placeholder="Email" v-model="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
                <div class="valid-feedback">Valide</div>
                <div class="invalid-feedback">Veuillez saisir un email</div>
            </div>
            <div class="form-group col-9 col-md-10 m-0">
                <label for="password"></label> 
                <input type="password" name="password" id="password" class="form-control form-control-lg" placeholder="Mot de passe" v-model="password" pattern="^[\w$@%*+\-_!]{8,15}$" required>
                <div class="valid-feedback">Valide</div>
                <div class="invalid-feedback">Veuillez saisir un mot de passe fort contenant entre 8 et 15 caractères dont au moins 1 lettre mininuscule, 1 lettre majuscule, 1 chiffre et 1 caractère spécial</div>
            </div>
            <div class="form-group mb-4">
                <input type="button" value="S'inscrire" class="btn btn-primary btn-lg col-12 col-md-5 mt-3 mb-2">
            </div>
        </form>
    </div>
</template>

<script>

export default ({
    name: 'signup',
})
</script>

<style lang="scss">
.valid-feedback{
    color: #56FE7F;
}
.invalid-feedback{
    color: #FAD8D8;
}

</style>
