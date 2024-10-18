const platos = [
    {
        "image": "./img/image-waffle-desktop.jpg",
        "name" : "Waffle con Berries",
        "category": "Especialidad",
        "price": 12.00
     },
     {
         "image": "./img/image-cake-desktop.jpg",
         "name": "Torta de Fresas",
         "category": "Especialidad",
         "price": 9.50
      },
      {
         "image":"./img/image-macaron-desktop.jpg",
         "name": "Macarones",
         "category": "Especialidad",
         "price": 8.50
      },
      {
        "image": "./img/image-brownie-desktop.jpg",
        "name": "Brownie",
        "category": "Postre",
        "price": 10.50
     },
     {
        "image": "./img/combo1.jpeg",
        "name": "Combo 1",
        "category": "Aperitivo",
        "price": 12.50
     },
     {
        "image": "./img/combo2.jpeg",
        "name": "Combo 2",
        "category": "Aperitivo",
        "price": 12.50
     },
 ];
     
const lista_platos = document.getElementById('aperitivo');

for(let i in platos){
    src = platos[i].image;
    categoria = platos[i].category;
    nombre = platos[i].name;
    precio = platos[i].price;
    renderizar(src,nombre,categoria,precio);
}

function renderizar(src,nombre,categoria,precio){
    lista_platos.innerHTML += `
            <div style="background-color: beige ; border: solid orange; width: 250px; padding: 12px; border-radius: 4%;">
                <div>
                    <img src=${src} alt="" style="width: 100%; border-radius: 4%;">
                </div>
                <div>
                    <p> ${categoria}</p>
                    <h1> ${nombre}</h1>
                    <p> ${precio}</p>
                </div>
            </div>`;     
}

const main = document.getElementById('main')

function bg1(){
    main.style.backgroundImage = "url(./img/images.jpeg)";
}

function bg2(){
    main.style.backgroundImage = "url(./img/2.jpg)";
}

function bg3(){
    main.style.backgroundImage = "url(./img/3.jpeg)";
}

function enviodedatos(event){

    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const dinero = document.getElementById('dinero').value;
    const dolares = document.getElementById('dolares').value;

    const dolares_cont = document.getElementById('dolares');
    const dolares_2 = dinero/3.8;
    
    dolares_cont.innerHTML= "Su compra en soles es:  " + dolares_2;
    console.log(nombre);
    console.log(apellido);
    console.log(dolares);



}