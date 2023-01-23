function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch('http://127.0.0.1:8001/direktori/:id')
    .then(res => res.json())
    .then(data => {
        const tabela = document.getElementById("tabela");
        
        data.forEach(e => {
            var tr = document.createElement('tr');
            var id = document.createElement('td');
            id.innerText = e.id;
            tr.appendChild(id);
            var ime = document.createElement('td');
            ime.innerText = e.ime;
            tr.appendChild(ime);
            var prezime = document.createElement('td');
            prezime.innerText = e.prezime;
            tr.appendChild(prezime);

            tabela.appendChild(tr);
        })
    })

    document.getElementById('btn').addEventListener('click', e => {
        e.preventDefault();
        document.cookie = `token=;SameSite=Lax`;
        const data = {
            ime: document.getElementById('ime').value,
            prezime: document.getElementById('prezime').value
        };

        if(data.ime.length > 0 && data.prezime.length >= 0){

            fetch('http://127.0.0.1:8001/direktori', {
                method: 'PUT',
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
                        window.location.href = 'http://127.0.0.1:8002/admin/direktori';
                    }
                })
                .catch(err => console.log("err"));
        }else{
            alert("Ime i prezime su obavezna polja");
        }
    });
}