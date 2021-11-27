import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sum } from "../../store/actions/calculator";

const Calculator = () => {
  // o useSelector tbm é um hook
  // USANDO ELE A GENTE TEM ACESSO AO ESTADO
  // é como se a gente agora pudesse ficar escutando as alterações no estado
  // e caso o estado mude em qualuqer ponto da aplicação
  // esse componente aqui tbm vai ter o seu estado alterado e a tela vai renderizar novamente com 
  // as novas informações
  const result = useSelector((state) => {
    return state.calculator;
  });

  // tbm é um hook
  // dispatch seria dispachar, a gente estaria dispachando
  // uma ação pra ser realizada
  const dispatch = useDispatch();

  // voces tem que ver o que nao faz sentido estar no store gloabal
  // por exemplo, o estado de um formulario
  // talvez só faça sentido estar no formulario
  // ESTADO LOCAL
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <>
      <input
        type="number"
        placeholder="a"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="b"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />

      <button onClick={() => dispatch(sum(a, b))}>somar</button>
      <button>subtrair</button>

      <div>{result}</div>
    </>
  );
};

// é uma convenção usar o nome mapStateToProps pq a gente faz um mapeamento do que vem do estado
// pras props do componente
// no state vai vir o objeto do store
// só que aqui nesse componente a gente só quer saber do calculator
// então fica result: state.calculator
// const mapStateToProps = state => ({
//     result: state.calculator
// })

// o connect é um high order componente
// ele é uma função que retorna outra função
// e a gente passa o componente pra essa função

// atraves do connect a gente vai conseguir pegar as informações do store

// quando a gente passa o mapStateToProps a gente consegue pegar
// o estado como uma prop dentro do nosso componente

export default Calculator;
