const form=document.querySelector("form");
form=addEventListener("submit",(e)=>{
    e.preventDefault();
    const owner=form.owner.value;  
    const phone=form.phone.value;
    if(owner=="sadick"&& phone==+250722666379){
       window.location.href="home.html";
    }
    else{
        alert("username and phone number are not correct");
    }
} )                                      
