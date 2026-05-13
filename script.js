// Versione con if annidati (TEST-OK)
/*
for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log('FizzBuzz');
    else if (i % 3 == 0) console.log('Fizz');
    else if (i % 5 == 0) console.log('Buzz');
    else console.log(i);
}
*/

// Versione ottimizzata e con meno if (TEST-OK)
let output;
for (let i = 1; i <= 100; i++) {
    output = "";

    // Se il numero è 15, la prima condizione aggiunge "Fizz", la seconda aggiunge "Buzz". L'output diventa "FizzBuzz" senza bisogno di un if dedicato per il 15.
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";

    // Se output è ancora vuoto, (significa che non è multiplo di 3 o 5), allora (or) stampa i
    console.log(output || i);
}