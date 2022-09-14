window.addEventListener('load', function(){
    const btn=document.getElementById("send");
    btn.addEventListener("click",onClick)
    function onClick(){
        const error1=document.getElementById("error msg1");
        const error2=document.getElementById("error msg2");
        const error3=document.getElementById("error msg3");
        const error4=document.getElementById("error msg4");
        const fullname=document.getElementById("fullname").value;
        if (fullname.length<5){
            error1.innerHTML="Your name needs to be more than 5 characters"
            error1.className = "error"
        }
        else{
            error1.innerHTML=""
            error1.className = ""
        }
        const email=document.getElementById("email").value;
        const postion=email.indexOf("@");
        const trueposition= parseInt(postion);
        const afterat=email.substring(trueposition);
        const beforeat=email.substring(0,trueposition);
   
        if (beforeat < 3 || afterat.length < 5){
                error2.innerHTML="Your email needs atleast 3 character before the @ and 5 after iy"
                error2.className="error"
        }
        else{
                error2.innerHTML=""
                error2.className = ""
        }
        
        const phonenumber=document.getElementById("phonenumber").value;
        if (phonenumber[0]!="+" || phonenumber[1]!="9" || phonenumber[2]!="6" || phonenumber[3]!="1"){
            error3.innerHTML="Your number should be start with +961"
            error3.className = "error"
        }
        else if (phonenumber[4]==3){
                truenumber=phonenumber.substring(4);
                if (truenumber.length!=7) {
                    error3.innerHTML="Your number should have 7 digits"
                    error3.className = "error"
                }
                else{
                    error3.innerHTML=""
                    error3.className = ""
                }
        }
        else if (phonenumber[4]==7){
            truenumber=phonenumber.substring(4);
                if (truenumber.length!=8) {
                    error3.innerHTML="Your number should have 8 digits"
                    error3.className = "error"
                }
                else{
                    error3.innerHTML=""
                    error3.className = ""
                        }
                
        }
        const message=document.getElementById("message").value
        if (message.length<100){
            error4.innerHTML="Your message should be at least 100 characters"
            error4.className = "error"
        }
        else{
            error4.innerHTML=""
            error4.className = ""
        }
        
        if(error1.innerHTML=="" && error2.innerHTML=="" && error3.innerHTML=="" && error4.innerHTML==""){
            // fetch(`http://localhost/Bootstrap-Template/add_article.php`,{
            //     method: 'POST',
            //     body: new URLSearchParams({"fullname": fullname},{"email": email},{"phonenumber": phonenumber},{"message":message})
            // }).then(function(response){
            //     console.log(response)
            // })
            //.then(data=>console.log(data))
            postData('http://localhost/Bootstrap-Template/add_article.php',
             {"fullname": fullname},{"email": email},{"phonenumber": phonenumber},{"message":message} )
                .then((data) => {
                console.log(data); // JSON data parsed by `data.json()` call
    });
            
        }

    }
    

})
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  