$(".botonTotal").append(`
    <div class="bontonTotalLeft">
        <button id="btnPagar" class="btnPagar">Pagar</button>
    </div>
    <div class="botonTotalRight">
        <button id="btnVaciar" class="btnVaciar">Vaciar</button>
    </div>`);$("#btnVaciar").click(function(e){$("#cantidadProducto").text("0")
$("#total").text("0");$(".carritoProducto").remove()})
$("#btnPagar").click(function(e){swal("Compra Exitosa!","Vuelva Pronto!","success");$("#cantidadProducto").text("0")
$("#total").text("0");$(".carritoProducto").remove()})