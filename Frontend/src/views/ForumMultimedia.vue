<template>
   <div class="form-row rounded bg-transparent shadow flex-column justify-content-center m-0 pb-0">  
       <h1 class="text-center text-white">Forum</h1>
        <div>
            <form id="forum" @submit.prevent="submitFormForum" class="row justify-content-center was-validated needs-validation" novalidate>
                <div class="form-group col-10 col-md-10 m-0 p-0">
                    <label for="post" class="col-auto col-form-label col-form-label-sm"></label> 
                    <textarea name="post" id="post" class="form-control form-control-lg" placeholder="Veuillez saisir un nouveau post" v-model="post" pattern="[A-Za-z\s\-éöàäèüáúóêûîôâ']{2,1500}" required></textarea>
                    <div class="valid-feedback">Valide</div>
                    <div class="invalid-feedback"></div>
                </div>
                <div class="form-group col-10 col-md-10 m-0 p-0">
                        <label for="image"></label>
                        <input class="" type="file" id="image" name="image" accept=".jpg, .jpeg, .png" multiple>                             
                </div>
                <div class="form-group col-6 col-md-7 col-lg-9 col-xl-11 mb-4 text-center">
                    <button type="submit" :click="submitFormForum" class="btn btn-primary btn-lg col-12 col-md-5 mt-3 mb-2">Poster</button>
                </div>            
            </form>
        </div>
        <button id="posts" @click="fetchDatas">Click</button>
    </div>
</template>

<script>
export default {
    name: 'forum',
    data(){
        return {
            pseudo:'',
            tableauPost: [],
        }
    },
    methods:{        
        submitFormForum: function (){
            let pseudo = this.pseudo;
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
                    body: JSON.stringify( message ),
                    mode: 'cors',
                    cache: 'default'
                }
            console.log(envoi);
            fetch("http://localhost:3000/api/forum/", envoi)
            .then(response => response.json())
            .then(messages => {
                console.log ('envoi ' + messages);
                })
            .catch(error => alert("Erreur : " + error));
            } else{
                alert ("Veuillez vérifier vos informations, le formulaire d'inscription n'est pas valide.")
            }
        },
        fetchDatas() {
        fetch("http://localhost:3000/api/forum/")
        .then(response => response.json())
        .then(posts => {
            this.tableauPost = posts;
            let fil = document.getElementById('posts');
            if(posts === ""){
                let noPost = document.createElement('h2');
                noPost.className = 'null row';
                noPost.textContent = 'Aucun post'
                fil.append(noPost);
            }else{
                for(let i=0; i<posts.length; i++){
                
                    let newPost = document.createElement('div');
                    newPost.className = 'post row';
                    fil.append(newPost);

                    let newPostPseudo = document.createElement('p');
                    newPostPseudo.className = 'postPseudo col-4 text-white';
                    newPostPseudo.textContent = posts[i].pseudonyme;
                    newPost.append(newPostPseudo);

                    let newPostDate = document.createElement('p');
                    newPostDate.className = 'postDate col-4 text-white';
                    newPostDate.textContent = posts[i].contenuDate;
                    newPost.append(newPostDate);

                    let newPostImage = document.createElement('img');
                    newPostImage.className = 'postImage img-thumbnail border-0 max-auto d-block img-fluid h-75'
                    newPostImage.textContent = posts[i].contenuImage;
                    newPost.append(newPostImage);

                    let newComment = document.createElement('div');
                    newComment.className = 'comment row';
                    fil.append(newComment);

                    let newCommentPseudo = document.createElement('p');
                    newCommentPseudo.className = 'commentPseudo col-4 text-white';
                    newCommentPseudo.textContent = posts[i].pseudonyme;
                    newComment.append(newCommentPseudo);

                    let newCommentDate = document.createElement('p');
                    newCommentDate.className = 'commentDate col-4 text-white';
                    newCommentDate.textContent = posts[i].commentaireDate;
                    newComment.append(newCommentDate);

                    let newCommentContenu = document.createElement('p');
                    newCommentContenu.className = 'commentContenu col-10 text-white';
                    newCommentContenu.textContent = posts[i].commentaire;
                    newComment.append(newCommentContenu);
                }
            }          
        })
        .catch(error => alert("Erreur : " + error))
        }
    }
}
</script>

<style>

</style>