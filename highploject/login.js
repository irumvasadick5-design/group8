const form=document.querySelector("form");
form=addEventListener("submit",(e)=>{
    e.preventDefault();
    const username=form.username.value;
    const pass=form.pass.value;
    if(username=="sadick"&& pass==2009){
       window.location.href="home.html";
    }
    else{
        alert("username and password are not correct");
    }
} )                                      

