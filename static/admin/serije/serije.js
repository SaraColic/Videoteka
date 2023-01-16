function init(){
    
}function init(){
    
}function init(){
    
    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch('http://127.0.0.1:8001/serije')
    .then(res => res.json())
    .then(data => {
        const tabela = document.getElementById("tabela");
        
        data.forEach(e => {
            var tr = document.createElement('tr');
            var id = document.createElement('td');
            id.innerText = e.id;
            tr.appendChild(id);
            var naziv = document.createElement('td');
            naziv.innerText = e.naziv;
            tr.appendChild(naziv);
            var opis = document.createElement('td');
            opis.innerText = e.opis;
            tr.appendChild(opis);
            var ocena = document.createElement('td');
            ocena.innerText = e.ocena;
            tr.appendChild(ocena);
            var direktorId = document.createElement('td');
            direktorId.innerText = e.direktorId;
            tr.appendChild(direktorId);
            var glumacId = document.createElement('td');
            glumacId.innerText = e.glumacId;
            tr.appendChild(glumacId);
            var zanrId = document.createElement('td');
            zanrId.innerText = e.zanrId;
            tr.appendChild(zanrId);
            var izmeni = document.createElement('a');
            izmeni.setAttribute("href", `/admin/direktori/serije/${e.id}`)
            izmeni.innerText = "Izmeni";
            tr.appendChild(izmeni);
            
            var obrisi = document.createElement('button');
            obrisi.innerText = "Obrisi";
            obrisi.type = "submit";
            tr.appendChild(obrisi);
            obrisi.addEventListener('click', function() {
                fetch(`http://127.0.0.1:8001/serije/${e.id}`, {
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