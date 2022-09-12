window.addEventListener('load', function(){
    const btn=document.getElementById("send")
    btn.addEventListener("click",onClick)
    function onClick(){
        const fullname=document.getElementById("fname").value;
        if (fullname.length<5){
            const error1=document.getElementById("error msg1")
            error1.innerHTML="Your name needs to be more than 5 characters"
            error1.className = "error"
        }
        else{
            const error1=document.getElementById("error msg1")
            error1.innerHTML=""
            error1.className = ""
        }
        const email=document.getElementById("Email").value;
        for (let i = 0; i < 3; i++){
            if (email[i]==="@"){
                const error2=document.getElementById("error msg2")
                error2.innerHTML="Your email needs atleast 3 character before the @"
                error2.className="error"
            }
            else{
                const error1=document.getElementById("error msg2")
                error1.innerHTML=""
                error1.className = ""
            }
        }
        const postion=email.indexOf("@");
        const trueposition= parseInt(postion);
        const afterat=email.substring(trueposition);
        if (afterat.length < 5){
            const error2=document.getElementById("error msg2")
                error2.innerHTML="Your email needs atleast 5 character after the @"
                error2.className="error"
                console.log("Hi")
        }
        else{
            const error1=document.getElementById("error msg2")
            error1.innerHTML=""
            error1.className = ""
        }
        const phonenumber=document.getElementById("Phone number").value;
        if (phonenumber[0]!="+" || phonenumber[1]!="9" || phonenumber[2]!="6" || phonenumber[3]!="1"){
            const error3=document.getElementById("error msg3")
            error3.innerHTML="Your number should be start with +961"
            error3.className = "error"
        }
        else if (phonenumber[4]==3){
                truenumber=phonenumber.substring(4);
                if (truenumber.length!=7) {
                    const error3=document.getElementById("error msg3")
                    error3.innerHTML="Your number should have 7 digits"
                    error3.className = "error"
                }
        }
        else if (phonenumber[4]==7){
            truenumber=phonenumber.substring(4);
                if (truenumber.length!=8) {
                    const error3=document.getElementById("error msg3")
                    error3.innerHTML="Your number should have 8 digits"
                    error3.className = "error"
                }
        }   
        }

    }
    

})