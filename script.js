document.getElementById("search").addEventListener('keypress',(e)=>{
    if(e.key==="Enter")
    {
     

     async function search(){
        let query=document.getElementById("search").value;
        let request=await fetch(`https://api.github.com/users/${query}`)
        let response=await request.json();
        console.log(response)

       document.getElementById("profilepic").setAttribute("src",response.avatar_url)


        document.getElementById("name").innerHTML=response.name;
        document.getElementById("id").innerHTML="Id-"+response.id;
        document.getElementById("email").innerHTML="Email-"+response.email;
        document.getElementById("repos").innerHTML="Public_repose-"+response.public_repos;
        document.getElementById("reposgist").innerHTML="Public_gists-"+response.public_gists;
        document.getElementById("followers").innerHTML="Followers-"+response.followers;
        document.getElementById("following").innerHTML="Following-"+response.following;
        document.getElementById("create").innerHTML="created at-"+response.created_at;
        document.getElementById("update").innerHTML="Last_updated-"+response.updated_at;
        
        
        
        



     }
     search()
    

    }

});


