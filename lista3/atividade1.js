let texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo."

console.log(texto.length)
console.log((texto.toUpperCase()))
console.log(texto.toLowerCase())

function vogais(str) {
    var quantidade = 0 
    for (var i = 0; i <= str.length - 1; i++) {
        
        if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
            quantidade += 1;
        }
    }
    return quantidade
}
console.log(vogais(texto))

console.log(texto.search("humanidade"))