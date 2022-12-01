import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Insira o nome da carta
          <input type="text" name="name" id="name" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          Insira descrição da carta
          <textarea name="description" id="description" data-testid="description-input" />
        </label>
        <label htmlFor="attr1">
          Insira o primeiro atributo
          <input type="number" name="attr1" id="attr1" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2">
          Insira o segundo atributo
          <input type="number" name="attr2" id="attr2" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3">
          Insira o terceiro atributo
          <input type="number" name="attr3" id="attr3" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          Insira o caminho da imagem da carta
          <input type="text" name="image" id="image" data-testid="image-input" />
        </label>
        <label htmlFor="insira">
          Insira a raridade da carta
          <select id="insira" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="sTrunfo">
          Selecione se a carta e super trunfo
          <input type="checkbox" name="sTrunfo" id="sTrunfo" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>

      </form>
    );
  }
}

export default Form;
