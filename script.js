let outerdiv=document.createElement("div")



document.getElementById("search").addEventListener('keypress',(e)=>{
    if(e.key==="Enter")
    {
        outerdiv.innerHTML="";
     

     async function search(){
        let query=document.getElementById("search").value;
        let request=await fetch(`https://api.github.com/users/${query}`)
        let response=await request.json();
        console.log(response)

        if(response.id!=="undefined"){

        
        if(response.length==="undefined"){
            document.getElementsByClassName("leftside-row").innerHTML="ooops"

        }else{
       document.getElementById("profilepic").setAttribute("src",response.avatar_url)


        document.getElementById("name").innerHTML=response.name;
        document.getElementById("id").innerHTML="Id-"+response.id+" ";
        let email=response.email
        if(email=="null"){
            email="not given";
        }
        document.getElementById("email").innerHTML="Email-"+email;
        
        document.getElementById("repos").innerHTML="Public_repose-"+response.public_repos;
        document.getElementById("reposgist").innerHTML="Public_gists-"+response.public_gists;
        document.getElementById("followers").innerHTML="Followers-"+response.followers;
        document.getElementById("following").innerHTML="Following-"+response.following;
        document.getElementById("create").innerHTML="created at-"+response.created_at;
        document.getElementById("update").innerHTML="Last_updated-"+response.updated_at;


     }
    }else{
        alert("user not found")
    }
 }
     search()
    

 }

});

//let outerdiv=document.createElement("div")
outerdiv.classList.add("outer")




function add(){
   
    async function searcher(){
        //outerdiv.innerHTML="";
        let innerdiv=document.createElement("div");

        let query=document.getElementById("search").value;
        let request= await fetch(`https://api.github.com/users/${query}/repos`)
        let response1=await request.json();
        console.log(response1)

   if(response1.length!==0)
     {

        


        for(let i=0;i<response1.length;i++){
       let sepratediv=document.createElement("div");
       sepratediv.classList.add("seprate")
 
        let defaultbranch=document.createElement("span")
        defaultbranch.innerHTML="branch-"+response1[i].default_branch;
        defaultbranch.classList.add("branch")

        let nameofrepo=document.createElement("p")
        nameofrepo.innerHTML="Reponame-"+response1[i].name
        nameofrepo.classList.add("reponames")

        let deploymenturl=document.createElement("p");
        deploymenturl.innerHTML="Deplopyment_URl-"+response1[i].deployments_url;
        deploymenturl.classList.add("deploy");
        

        let img=document.createElement("img")
        img.setAttribute("src","https://i.postimg.cc/rpDtgwSW/circle-16.png")
        img.classList.add("dot")


        let languages=document.createElement("p")
        languages.innerHTML="languages_used-"+response1[i].language;
        languages.classList.add("language")

        let network=document.createElement("p")
        network.innerHTML="size-"+response1[i].size
        network.classList.add("network")


        let net=document.createElement("img")
        net.setAttribute("src","https://i.postimg.cc/rpDtgwSW/circle-16.png")



        let watch=document.createElement("p");
        watch.innerHTML="watchers-"+response1[i].watchers_count;
        watch.classList.add("watchers")

        let dateworked=document.createElement("p")
        dateworked.innerHTML="lastupdates_on"+response1[i].pushed_at
        dateworked.classList.add("work")
        
        let space=document.createElement("p")
        space.innerHTML=""



        


        sepratediv.append(defaultbranch,nameofrepo,deploymenturl,img,languages,watch,network,dateworked,space)
       innerdiv.append(sepratediv)
       outerdiv.append(innerdiv)

       document.body.append(outerdiv)
    }
}else{
            alert("This page is Error!404.No repose found")
        }
        
        


}

    searcher();
    

}





