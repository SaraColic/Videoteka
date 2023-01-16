function init(){
    
    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch('http://127.0.0.1:8001/korisnici', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
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
            var username = document.createElement('td');
            username.innerText = e.username;
            tr.appendChild(username);
            var password = document.createElement('td');
            password.innerText = e.password;
            tr.appendChild(password);
            var email = document.createElement('td');
            email.innerText = e.email;
            tr.appendChild(email);
            var tip = document.createElement('td');
            tip.innerText = e.tip;
            tr.appendChild(tip);
            var izmeni = document.createElement('a');
            izmeni.setAttribute("href", `/admin/komentari/korisnici/${e.id}`)
            izmeni.innerText = "Izmeni";
            tr.appendChild(izmeni);
            
            var obrisi = document.createElement('button');
            obrisi.innerText = "Obrisi";
            obrisi.type = "submit";
            tr.appendChild(obrisi);
            obrisi.addEventListener('click', function() {
                fetch(`http://127.0.0.1:8001/korisnici/${e.id}`, {
                        method: 'DELETE',
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }}).then(res => {
                            res.json().then(data => {
                                if(res.status == 200){
                                    alert("Uspesno brisanje!");
                                    window.location.reload();
                                }else{
                                    alert(data.msg);
                                }
                            })
                        });
            });         
            
            tabela.appendChild(tr);
        })
    })
    
}