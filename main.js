const producto = [
    {nombre:"creatina",precio:3500},
    {nombre:"proteina",precio:7000},
    {nombre:"glutamina",precio:3000},
    {nombre:"carnitina",precio:5000},
    {nombre:"magnesio",precio:6000},
];
let carrito = []
let seleccion = prompt ("hola desea comprar algun suplemento si o no")
while(seleccion != "si" && seleccion !="no"){
alert ("por favor ingrese si o no")
seleccion = prompt("hola desea compra algo si o no")
}
if(seleccion =="si"){
    alert("a continuacion nuestra lista de productos")
    let todoslosProductos = producto.map ((producto) => producto.nombre + " "+ producto.precio + "$");
    alert(todoslosProductos.join(" - "))
} else if(seleccion == "no") {
    alert("gracias por visitarnos, vuelva pronto!!")
}
