function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];
    document.getElementById('btn').addEventListener('click', e => {
        e.preventDefault();
        document.cookie = `token=;SameSite=Lax`;
        const data = {
            naziv: document.getElementById('naziv').value,
            opis: document.getElementById('opis').value
        };

        if(data.naziv.length > 0 && data.opis.length >= 0){

            fetch('http://127.0.0.1:8001/epizode', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data),

            })
                .then( res => res.json() )
                .then( el => {
                    if (el.msg) {
                        alert(el.msg);
                    } else {
                        alert("Uspesno dodato!")
                        window.location.href = 'http://127.0.0.1:8002/admin/epizode';
                    }
                })
                .catch(err => console.log("err"));
        }else{
            alert("Naziv i opis su obavezna polja");
        }
    });
}