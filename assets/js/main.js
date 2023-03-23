
function myFunction(){

    let nome = document.querySelector('#nomecognome').value;

    let x = document.querySelector('#mySelect');
    let i = x.selectedIndex;
    
    let km = document.getElementById('km').value;
    let prezzo = km * 0.21;

    if (x.options[i] == x.options[0]) {
        prezzo -= prezzo * 0.20;     

    }else if (x.options[i] == x.options[2]) {
        prezzo -= prezzo * 0.40;

    }


    document.getElementById("passeggero").innerHTML = `

    <div class="box flex-col p-1">
        <h2 class="flex-start m-tb-1">Dettaglio passeggero</h2>
        <div class="flex gap-1">
            
            <div class="card-element">
                <h4>Nome passeggero</h4>
                <h3>${nome}</h3>
            </div>
            <div class="card-element">
                <h4>Offerta</h4>
                <h3>Nessuna Offerta</h3>
            </div>
            <div class="card-element">
                <h4>Carrozza</h4>
                <h3>${Math.floor(Math.random()*10)}</h3>
            </div>
            <div class="card-element">
                <h4>Codice CP</h4>
                <h3>${Math.floor(Math.random()*9999)+ 10000}</h3>
            </div>
            <div class="card-element">
                <h4>Costo Biglietto</h4>
                <h3>${prezzo.toFixed(2)}€</h3>
            </div>
        </div>
    </div>
    `

    console.log(prezzo.toFixed(2));
}

