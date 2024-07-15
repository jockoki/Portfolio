// Configurar la fecha de finalización para la cuenta regresiva (getTime == Tiempo en milisegundos)
let launchDate = new Date("Jul 22, 2024 12:00:00").getTime();

// Configurar el temporizador para que marque cada 1 segundo
let timer = setInterval(tick, 1000);

function tick () {
  // Obtener la hora actual
  let now = new Date().getTime();
  // Obtener la diferencia de tiempo para obtener el tiempo restante hasta que llegue a 0
  let t = launchDate - now;

  // Verificar si el tiempo es mayor a 0
  if (t > 0) {
    // Configurar días, horas, minutos y segundos
    // Algoritmo para calcular días...
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    // Prefijar cualquier número menor a 10 con "0" Ej. 1 = 01
    if (days < 10) { days = "0" + days; }
    
    // Algoritmo para calcular horas
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) { hours = "0" + hours; }

    // Algoritmo para calcular minutos
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) { mins = "0" + mins; }

    // Algoritmo para calcular segundos
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) { secs = "0" + secs; }

    // Crear cadena de tiempo
    let time = `${days} : ${hours} : ${mins} : ${secs}`;

    // Establecer tiempo en el documento
    document.querySelector('.countdown').innerText = time;
  }
}
