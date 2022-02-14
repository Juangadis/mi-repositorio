import{agregarProducto}from './agregarProductos.js';$.get("data.json",(data)=>{data.forEach((producto)=>{$(".cardProduct").append(`
        <div class="col-6 col-lg-3 card">
            <div class="imgCard">
                <img class="imagenCard" src=${producto.img} alt="">
            </div>
            <div class="infoCard">
                <p>
                    ${producto.nombre}<br>
                    ${producto.categoria}<br>
                    ${producto.alcohol}<br>
                    $${producto.precio} Tubos pro - ${producto.cantidad}
                </p>
            </div>
            <div class="botonCard">
                <button class="button${producto.id}">Agregar al Carrito</button>
            </div>
        </div>
        `)
const carritoSuma=[];$(`.button${producto.id}`).click(function(e){agregarProducto(producto)})})})