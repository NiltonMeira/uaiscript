export const functions = {
    // declarar variavel
    0: (value, identifier) => values[identifier] = value,
    // print
    1: (text) => console.log(text),
    // soma
    2: (listOfNumbers) => listOfNumbers.reduce((acc, cur) => acc + cur , 0),
    // subtração 
    3: (listOfNumbers) => listOfNumbers.reduce((acc, cur) => acc - cur , 0),
    // multiplicação
    4: (listOfNumbers) => listOfNumbers.reduce((acc, cur) => acc * cur , 0),
    // divisão
    5: (listOfNumbers) => listOfNumbers.reduce((acc, cur) => acc / cur , 0),
}