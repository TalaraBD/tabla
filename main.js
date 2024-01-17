document.addEventListener("DOMContentLoaded", function () {
    // Función para agregar filas a la tabla
    function agregarFilas(datos, rutaBase) {
        var tbody = document.getElementById("componentesTable").getElementsByTagName("tbody")[0];
    
        datos.features.forEach(function (fila) {
            var tr = document.createElement("tr");
    
            // Agregar celdas a la fila
            var componenteLink = rutaBase;
            tr.innerHTML += "<td><a href='" + componenteLink + "'>" + fila.properties.COMPONENTE + "</a></td>";
            tr.innerHTML += "<td>" + fila.properties.NOMBRE + "</td>";
            tr.innerHTML += "<td>" + fila.properties.SECTOR + "</td>";
            tr.innerHTML += "<td>" + fila.properties.PAQUETE + "</td>";
            tr.innerHTML += "<td>" + fila.properties.CODIGO + "</td>";
            tr.innerHTML += "<td><button type='button' class='btn btn-primary' onclick='window.open(\"" + fila.properties.ENLACE_BIM + "\", \"_blank\")'>Abrir enlace</button></td>";
            tr.innerHTML += "<td></td>"; // Columna para actualizar (upd)
            tr.innerHTML += "<td></td>"; // Columna para eliminar (del)
    
            // Agregar fila a tbody
            tbody.appendChild(tr);
        });
    }

    var url2 = "componentes/componente2/componente2.html"
    var url3 = "componentes/componente13/componente13.html"
    var url4 = "componentes/componente4/componente4.html"

    // Llamar a la función para agregar filas
    agregarFilas(componentesData2, url2);
    agregarFilas(componentesData3, url3);
    agregarFilas(componentesData4, url4);
});