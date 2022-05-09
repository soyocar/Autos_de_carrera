import "./styles.css";
let btnEnv = document.getElementById("enviar");
let vuelta1: number = document.getElementById("dato1");
let vuelta2: number = document.getElementById("dato2");
let vuelta3: number = document.getElementById("dato3");
let vuelta4: number = document.getElementById("dato4");
btnEnv.addEventListener("click", () => {
  let primera: number = Number(vuelta1.value);
  let segunda: number = Number(vuelta2.value);
  let tercera: number = Number(vuelta3.value);
  let cuarta: number = Number(vuelta4.value);

  let tiempoTotal = primera + segunda + tercera + cuarta;
  console.log("Tiempo total; ", tiempoTotal);
  console.log("Promedio de vuelta: ", tiempoTotal / 4);

  //}
});
