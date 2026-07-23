// Cambia esta fecha por la que quieras
const fechaFinal = new Date("2026-11-19T00:10:00").getTime();

function actualizar(){

    const ahora = new Date().getTime();

    const diferencia = fechaFinal - ahora;

    if(diferencia <= 0){

        document.getElementById("dias").textContent="00";
        document.getElementById("horas").textContent="00";
        document.getElementById("minutos").textContent="00";
        document.getElementById("segundos").textContent="00";

        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(diferencia/(1000*60*60*24));

    const horas = Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));

    const minutos = Math.floor((diferencia%(1000*60*60))/(1000*60));

    const segundos = Math.floor((diferencia%(1000*60))/1000);

    document.getElementById("dias").textContent = String(dias).padStart(2,"0");
    document.getElementById("horas").textContent = String(horas).padStart(2,"0");
    document.getElementById("minutos").textContent = String(minutos).padStart(2,"0");
    document.getElementById("segundos").textContent = String(segundos).padStart(2,"0");

}

actualizar();

const intervalo = setInterval(actualizar,1000);