function opcion(miOpcion) {
  // console.log(miOpcion);
  let resultados = ["empataste", "ganaste", "perdiste"];
  let opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
  //   console.log(opciones[miOpcion]);

  let jugada = [
    [0, 1, 2, 2, 1],
    [2, 0, 1, 1, 2],
    [1, 2, 0, 2, 1],
    [1, 2, 1, 0, 2],
    [2, 1, 2, 1, 0],
  ];

  let jugadasTexto = [
    [
      "Iguales",
      "El papel cubre la piedra",
      "las piedras rompen las tijeras",
      "la piedra aplaste el lagarto",
      "Spock vaporiza piedra",
    ],
    [
      "El papel cubre la piedra",
      "Iguales",
      "Tijeras cortan papel",
      "Lagarto se come el papel",
      "Papel desautoriza spock",
    ],
    [
      "las piedras rompen las tijeras",
      "Tijeras cortan papel",
      "Iguales",
      "Tijeras decapitan lagarto",
      "Spock rompe tijeras",
    ],
    [
      "la piedra aplaste el lagarto",
      "lagarto se come el papel",
      "tijeras decapitan lagarto",
      "Iguales",
      "lagarto envenena spock",
    ],
    [
      "Spock vaporiza piedra",
      "Papel desautoriza Spock",
      "Spock rompe tijeras",
      "lagarto envenena spock",
      "Iguales",
    ],
  ];

  let cpu = Math.floor(Math.random() * 5);
  let resultado = jugadasTexto[cpu][miOpcion];
  console.log(`CPU: ${opciones[cpu]}`);
  console.log(`Jugador: ${opciones[miOpcion]}`);

  console.log(resultado);
  //ganaste perdiste empataste
  console.log(resultados[jugada[cpu][miOpcion]]);
  //opcion ganadora
  console.log(opciones[jugada[miOpcion][cpu]]);
}
