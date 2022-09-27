const tourist = prompt("Qual é o seu nome?");
let cities = "";
let visits = confirm(
  "Você já visitou alguma cidade? Clique em 'OK' para sim e 'Cancela' para não."
);

while (visits == true) {
  cities += "\n" + prompt("Qual cidade?");
  visits = confirm(
    "Você já visitou alguma outra cidade? Clique em 'OK' para sim e 'Cancela' para não."
  );
}

alert("Ok, obrigado!");

alert("O turista " + tourist + " visitou as seguintes cidades: " + cities);