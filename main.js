function muestra_oculta(id){
    let div = document.getElementById('contenido');
    if(div.style.display == 'none'){
        div.style.display = 'flex';
    }
    else{
        div.style.display = 'none';
    }
    
}