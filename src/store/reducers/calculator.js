// reducer é só uma função que retorna o estado da calculadora
// a gente pode colocar o o nome da função do reducer com o mesmo nome do objeto que vai existir no store
// ela armazena estado e tbm pode manipular estado
// o reducer é o que vai receber o objeto action creator
// e vai realmente retornar o estado do store 

// dentro do state vem o estado atual da aplicação
// pode começar com umvalor inicial, senao vai ficar undefined
// state = 0 é só na primeira execucao, nas proximas provavelmente vai ter valor pq vai somar, subtrair, etc
export default function reducer(state = 0, action) {
    
    // o reducer precisa retornar o estado da aplicação
    // mas ele retorna o estado com base no tipo da ação
    // daria pra ser um if mas tbm podemos usar um switch, explicar

    switch(action.type) {
        case "SUM":
            return action.payload[0] + action.payload[1]
        case "SUBTRACT":
            return action.payload[0] - action.payload[1]
        default: 
            return state
    }
}