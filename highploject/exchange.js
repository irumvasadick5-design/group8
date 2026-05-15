const form=document.querySelector("form");
form=addEventListener("submit",(e)=>{
    e.preventDefault();
    const owner=form.owner.value;
    const phone=form.phone.value;
    if(owner=="sadick"&& phone==2009){

      error.message="your exchange are successful";

    }
    else{
     error.message="username and password are not correct";
    }
} )                                      
