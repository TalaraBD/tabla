document.addEventListener("DOMContentLoaded", function () {
    // Función para agregar filas a la tabla
    function agregarFilas() {
        var tbody = document.getElementById("componentesTable").getElementsByTagName("tbody")[0];

        componentesData.features.forEach(function (fila) {
            var tr = document.createElement("tr");

            // Agregar celdas a la fila
            tr.innerHTML += "<td>" + fila.properties.COMPONENTE + "</td>";
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

    // Llamar a la función para agregar filas
    agregarFilas();
});