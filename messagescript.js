window.addEventListener('load', function(){

    function getmessage(){
        fetch(`C:/xampp/htdocs/Bootstrap/articles.php`)
            .then(res => res.json())
            .then(data => {
                message.innerHTML = ` ${data}`
            })
    }
    getmessage()



})