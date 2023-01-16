function init(){
    
}function init(){
    
    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch('http://127.0.0.1:8001/iznajmljeni', {
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
            var datumIsteka = document.createElement('td');
            datumIsteka.innerText = e.datumIsteka;
            tr.appendChild(datumIsteka);
            var filmId = document.createElement('td');
            filmId.innerText = e.filmId;
            tr.appendChild(filmId);
            var sezonaId = document.createElement('td');
            sezonaId.innerText = e.sezonaId;
            tr.appendChild(sezonaId);
            var korisnikId = document.createElement('td');
            korisnikId.innerText = e.korisnikId;
            tr.appendChild(korisnikId);
            
            var obrisi = document.createElement('button');
            obrisi.innerText = "Obrisi";
            obrisi.type = "submit";
            tr.appendChild(obrisi);
            obrisi.addEventListener('click', function() {
                fetch(`http://127.0.0.1:8001/iznajmljeni/${e.id}`, {
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