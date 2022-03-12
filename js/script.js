var numeroAleatorio1 = Math.floor(Math.random() * 6) + 1;

var imagemAleatoria = "dado" + numeroAleatorio1 + ".png";

var localImagens  = "imagens/" + imagemAleatoria;

var imagem1 = document.querySelectorAll("img")[0];

imagem1.setAttribute("src", localImagens);

var numeroAleatorio2 = Math.floor(Math.random() * 6) + 1;

var localImagens2 = "imagens/dado" + numeroAleatorio2 + ".png";

var imagem2 = document.querySelectorAll("img")[1];

imagem2.setAttribute("src", localImagens2)

if (numeroAleatorio1 > numeroAleatorio2) {
    document.querySelector("h1").innerHTML = "🚩 Jogador 1 Venceu!";
} else if (numeroAleatorio2 > numeroAleatorio1) {
    document.querySelector("h1").innerHTML = "Jogador 2 Venceu!🚩";
} else {
    document.querySelector("h1").innerHTML = "Empate!";
}