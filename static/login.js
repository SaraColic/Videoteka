function init() {

    document.getElementById('btn').addEventListener('click', e => {
        e.preventDefault();
        document.cookie = `token=;SameSite=Lax`;
        const data = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        };

        if(data.username.length > 0 && data.password.length >= 5){

            fetch('http://127.0.0.1:8000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then( res => res.json() )
                .then( el => {
                    if (el.msg) {
                        alert(el.msg);
                    } else {
                        document.cookie = `token=${el.token};SameSite=Lax`;
                        window.location.href = 'http://127.0.0.1:8002/admin';
                    }
                })
                .catch(err => console.log("err"));
        }else{
            if(data.username.length == 0){
                alert("Username mora biti unet");
            }
            if(data.password.length < 5 ){
                alert("Password mora biti duzine bar 5");
            }
        }
    });
}