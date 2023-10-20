export const execute = [
    // id: 0 declara variavel
    {id: 0, parameters: ['message', 'hello world']},
    // print da variavel
    {id: 1, parameters: ['message']},
    // if
    {id: 2, parameters: [3 > 5, 2]},
    // mudando o valor da variavel message
    {id: 0, parameters: ['message', 3>5]},
    // print da variavel
    {id: 1, parameters: ['message']},
    // mudando o valor da variavel message
    {id: 0, parameters: ['message', 1]},
    // print da variavel
    {id: 1, parameters: ['message']},
]

export const values = []