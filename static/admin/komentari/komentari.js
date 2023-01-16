function init(){
    
    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch('http://127.0.0.1:8001/komentari', {
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
            var tekst = document.createElement('td');
            tekst.innerText = e.tekst;
            tr.appendChild(tekst);
            var filmId = document.createElement('td');
            filmId.innerText = e.filmId;
            tr.appendChild(filmId);
            var epizodaId = document.createElement('td');
            epizodaId.innerText = e.epizodaId;
            tr.appendChild(epizodaId);
            var korisnikId = document.createElement('td');
            korisnikId.innerText = e.korisnikId;
            tr.appendChild(korisnikId);
            
            var obrisi = document.createElement('button');
            obrisi.innerText = "Obrisi";
            obrisi.type = "submit";
            tr.appendChild(obrisi);
            obrisi.addEventListener('click', function() {
                fetch(`http://127.0.0.1:8001/komentari/${e.id}`, {
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