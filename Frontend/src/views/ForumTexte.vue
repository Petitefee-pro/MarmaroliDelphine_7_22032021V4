<template>
   <div class="form-row flex-column justify-content-center m-0 p-0">  
        <ul class="nav nav-fill">
            <li class="nav-item h-50 bg-secondary">
                <router-link class="nav-link pl-4 p-1 col-1 text-white font-weight-bold" to="/forum">
                    <i class="fas fa-angle-left"></i>
                </router-link>
            </li>   
            <li class="nav-item h-50 bg-secondary">
                <router-link class="nav-link p-1 text-white font-weight-bold" to="/forum-texte">Forum texte</router-link>
            </li>
            <li class="nav-item h-50 bg-secondary">
                <router-link class="nav-link p-1 text-white font-weight-bold" to="/forum-multimedia">Forum Multimédia</router-link> 
            </li>
        </ul>  
        <view-routeur></view-routeur>
        <h1 class="text-center text-white">Forum Texte</h1>
        <div class="border border-white rounded">
            <form id="forum" @submit.prevent="submitFormForum" class="row justify-content-center was-validated needs-validation" novalidate>
                <div class="form-group col-11 col-md-10 m-0 p-1">
                    <label for="post" class="col-auto col-form-label col-form-label-sm"></label> 
                    <textarea name="post" id="post" class="form-control form-control-lg" placeholder="Veuillez saisir un nouveau post" v-model="post" pattern="[A-Za-z\s\-éöàäèüáúóêûîôâ']{2,1500}" required></textarea>
                    <div class="valid-feedback">Valide</div>
                    <div class="invalid-feedback"></div>
                </div>
                <div class="form-group col-6 col-md-7 col-lg-9 col-xl-11 mb-2 text-center">
                    <button type="submit" :click="submitFormForum" class="btn btn-primary btn-lg col-12 col-md-5 mt-3 mb-2">Poster</button>
                </div>            
            </form>
        </div>
        <div>
            <section v-if="errored">
                <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p>
            </section>
            <section v-else>
                <div v-if="loading">Chargement...</div>
                <div v-else v-for-key="forums" class="forums">
                    {{ forum.description }}
                    
                </div>
            </section>
        </div>   
        <div>
            <button class="btn btn-primary btn-sm"><i class="far fa-comment-dots"></i></button>
            <button class="btn btn-primary btn-sm"><i class="far fa-trash-alt"></i></button>
        </div>        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'forum',
    data(){
        return {
            pseudo:'',
            info: null,
            loading: true,
            errored: false            
        }
    },
    methods:{        
        submitFormForum: function (){
            let pseudo = localStorage.getItem('pseudo');
            let post = this.post;
            let regexPost = /[A-Za-z\s\-éöàäèüáúóêûîôâ']{2,1500}/g;
            if((regexPost.test(post) === true)
            ){
                let message = {
                    pseudo: pseudo,
                    post: post
                }
                console.log(message);
                const envoi = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message }),
                    mode: 'cors',
                    cache: 'default'
                }
            console.log(envoi);
            fetch("http://localhost:3000/api/forum", envoi)
            .then(response => {
                console.log(response);
                /*location.replace('http://localhost:8080/forum-texte')*/
            })            
            .catch(error => alert("Erreur : " + error));
            }
        },
        getPosts(){
            axios
                .get ("http://localhost:3000/api/forum/")
                .then( response => {
                    this.info = response.data.forum
                })                
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loaging = false)
        }        
    }
}
</script>

<style>

</style>