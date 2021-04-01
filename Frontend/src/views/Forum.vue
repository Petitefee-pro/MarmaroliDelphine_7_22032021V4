<template>
    <h1 class="text-center text-white">Forum</h1>
</template>

<script>
export default {
    name: 'forum',
    /*methods:{
        fetch('http://localhost:3000/api/forum')
        .then(response => response.json())
        .then(posts => {
            main = document.getElementById('app');
            if(posts === ""){
                null = document.createElement('h2');
                null.className = 'null row';
                null.textContent = 'Aucun post'
                main.append(null);
            }else{
                for(let i=0; i<posts.length; i++){
                
                    newPost = document.createElement('div');
                    newPost.className = 'post row';
                    main.append(newPost);

                    newPostPseudo = document.createElement('p');
                    newPostPseudo.className = 'postPseudo col-4 text-white';
                    newPostPseudo.textContent = posts[i].pseudonyme;
                    newPost.append(newPostPseudo);

                    newPostDate = document.createElement('p');
                    newPostDate.className = 'postDate col-4 text-white';
                    newPostDate.textContent = posts[i].contenuDate;
                    newPost.append(newPostDate);

                    newPostImage = document.createElement('img');
                    newPostImage.className = 'postImage img-thumbnail border-0 max-auto d-block img-fluid h-75'
                    newPostImage.textContent = posts[i].contenuImage;
                    newPost.append(newPostImage);

                    newComment = document.createElement('div');
                    newComment.className = 'comment row';
                    main.append(newComment);

                    newCommentPseudo = document.createElement('p');
                    newCommentPseudo.className = 'commentPseudo col-4 text-white';
                    newCommentPseudo.textContent = posts[i].pseudonyme;
                    newComment.append(newCommentPseudo);

                    newCommentDate = document.createElement('p');
                    newCommentDate.className = 'commentDate col-4 text-white';
                    newCommentDate.textContent = posts[i].commentaireDate;
                    newComment.append(newCommentDate);

                    newCommentContenu = document.createElement('p');
                    newCommentContenu.className = 'commentContenu col-10 text-white';
                    newCommentContenu.textContent = posts[i].commentaire;
                    newComment.append(newCommentContenu);
                }
            }            
        })
        .catch(error => alert("Erreur : " + error))
    }*/
}
</script>

<style>

</style>