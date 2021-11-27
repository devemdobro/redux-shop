# Redux shop

Lista de produtos da listagem inicial

src/json/products.json

## Estados iniciais
products: [] produtos que vieram do mock
cartProducts: [] produtos que estão no carrinho

para buscar o total de produtos no carrinh é só fazer um cartProducts.length

----------------------------
## Mudanças de estado 

No produto da listagem tem um botão pra adicionar ao carrinho 

quando o usuario clicar em adicionar o produto dispara uma action "ADD_PRODUCT_TO_CART"

essa action vai ser dispachada pra o reducer
que ouve a action, pega todos os produtos atuais no carrinho e adiciona um novo

o novo estado é uma lista com um produto adicionado

## componentes

### CartTotal
escuta as atualizações na quantidade de produtos no cartProducts


### `yarn test`
