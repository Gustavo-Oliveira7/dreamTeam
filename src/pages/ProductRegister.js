import React from 'react';
import Header from '../components/Header';

function ProductRegister() {
  return (
    <div>
      <Header />
      <div className="divFormRegister">
        <form className="formRegister">
          <label htmlFor="name">
            Nome do produto
          </label>
          <input id="name" />
          <label htmlFor="description">
            Descrição do Produto
          </label>
          <input id="description" />
          <label htmlFor="preco">
            Preço
          </label>
          <input id="preco" type="number" />
          <label htmlFor="estoque">
            Quantidade de Estoque
          </label>
          <input id="estoque" type="number" />
          <label htmlFor="image">
            Link da Imagem
          </label>
          <input id="image" />
          <button className="btn">Registrar Produto</button>
        </form>
      </div>
    </div>
  );
}

export default ProductRegister;
