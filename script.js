let name = prompt("Qual seu nome?");

while (!name || name.trim() === "") {
    alert("Por favor, insira um nome válido.");
    name = prompt("Qual seu nome?");
}
alert(`Bem vindo ao meu site, ${name}, espero que goste da minha página! Fiz com muito carinho :)`);

