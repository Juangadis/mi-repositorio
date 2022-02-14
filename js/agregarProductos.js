let arrayProducto=[];const sumaPrecioProducto=()=>{let resultado=0;for(const producto of arrayProducto){resultado+=producto.precio;total.innerText=resultado}}
const agregarProducto=(productoAgregado)=>{arrayProducto.push(productoAgregado);swal("Producto Agregado al Carrito",productoAgregado.nombre,"success")
localStorage.setItem("producto",JSON.stringify(arrayProducto))
$("#listaProductos").append(`
    <div class="carritoProducto">
        <span class="producto">${productoAgregado.nombre} $${productoAgregado.precio}</span>
    </div>`)
$('#cantidadProducto').text(`${arrayProducto.length}`);$("#total").append(sumaPrecioProducto())}
export{agregarProducto}