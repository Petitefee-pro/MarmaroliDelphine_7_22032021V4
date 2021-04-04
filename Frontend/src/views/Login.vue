<template>
    <div class="login form-row rounded bg-transparent shadow justify-content-center">
        <form id="login" @submit="submitFormLogin" class="row justify-content-center was-validated needs-validation" novalidate>
            <div class="form-group col-9 col-md-10 mb-0 pr-2 pl-2">
                <label for="email"></label> 
                <input type="email" name="email" id="email" class="form-control form-control-lg" placeholder="Email" v-model="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
                <div class="valid-feedback">Valide</div>
                <div class="invalid-feedback">Veuillez saisir votre email</div>
            </div>
            <div class="form-group col-9 col-md-10 mb-0 pr-2 pl-2">
                 <label for="password"></label> 
                <input type="password" name="password" id="password" class="form-control form-control-lg" placeholder="Mot de passe" v-model="password" pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$" required>
                <div class="valid-feedback">Valide</div>
                <div class="invalid-feedback">Veuillez saisir votre mot de passe</div>
            </div>
            <div class="form-group col-12 text-center m-2">
                <button type="submit" :click="submitFormLogin" class="btn btn-primary btn-lg mt-3 mb-2">Se connecter</button>
            </div>
            <p class="inscription text-center text-white col-9 mb-4">
                Vous n'avez pas encore de compte, <router-link to="/signup">inscrivez-vous</router-link>.
            </p>
        </form>
    </div>
</template>

<script>

export default ({
    name: 'login',
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        submitFormLogin: function (){
            let email = this.email;
            let password = this.password;
            if((email === "") 
                && (password === "")
            ){
                alert ("Veuillez s'il vous plaît, indiquer votre email et votre mot de passe valide ! ")
            } else{
                let login = {
                    email: email, 
                    password: password
                };
                console.log(login);
                const envoi = {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify({ login }),
                    mode: 'cors',
                    cache: 'default'
                };
                console.log(envoi);
                fetch("http://localhost:3000/api/user/login", envoi)
                .then(response => {
                    console.log(response);
                    location.replace('http://localhost:8080/forum')
                })                                                                
                .catch(error => alert("Erreur : " + error));
            }
        }
    }
})
</script>

<style scoped lang="scss">
@media screen and (min-width: 768px) and (max-width: 2500px) {
    .login{
        height: 600px;        
    }
}
</style>
