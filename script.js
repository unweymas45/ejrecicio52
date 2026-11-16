//entrada de datos
const nombreEstudiante = document.getElementById("nombreEstudiante");
const notaPromedio = document.getElementById("notaPromedio");
const inputTrimestre1 = document.getElementById("notaTrimestre1");
const inputTrimestre2 = document.getElementById("notaTrimestre2");
const inputTrimestre3 = document.getElementById("notaTrimestre3");
const btnCalcular = document.getElementById("btnCalcular"); 
//proceso y //salida
function obtenerNotaValida(input) {
    if (input.value.trim()=== "") {
        return 0;
    }
    const valor = Number(input.value);
    return isNaN(valor) ? 0 : valor;
}
btnCalcular.addEventListener("click", function(){
    let n1 = obtenerNotaValida(inputTrimestre1);
    let n2 = obtenerNotaValida(inputTrimestre2);
    let n3 = obtenerNotaValida(inputTrimestre3);
    if (n1 < 10 || n1 > 100 || n2 < 10 || n2 > 100 || n3 < 10 || n3 > 100){
        alert("Error: Todas las notas deben estar entre 10 y 100 puntos.");
        return; 
    }
    let promedio = (n1 + n2 + n3)/3;
    notaPromedio.textContent = `Promedio Anual: ${promedio.toFixed(2)} Pts.`;
    notaPromedio.classList.remove("text-light", "text-success", "text-danger");
    if (promedio >= 51) {
        notaPromedio.classList.add("text-success");
    } else {
        notaPromedio.classList.add("text-danger");
    }
});
 