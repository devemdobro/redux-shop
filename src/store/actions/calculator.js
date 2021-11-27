// action creator ou action - uma função que nos retorna uma action

// uma ação é disparada pelos componentes
// geralmente depois de alguma ação do usuario ou ações da aplicação
// retorna um objeto com action type e payload 
// é feito assim pra gente poder apssar aparametros pra funcao

export function sum(a, b) {
    return {
        type: 'SUM',
        payload: [a, b]
    }
}

export function subtract(a, b) {
    return {
        type: 'SUBTRACT',
        payload: [a, b]
    }
}