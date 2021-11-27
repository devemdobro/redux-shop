import { createStore, combineReducers } from 'redux'
//import calculatorReduce from './reducers/calculator'
import cartReduce from './reducers/cart'

// combineReducers recebe um objeto com todos os reducers
// que são a representação dos objetos no store
const rootReducer = combineReducers({
    //calculator: calculatorReduce,
    cartProducts: cartReduce
})

// mostra depois
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store