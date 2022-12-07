import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  };

  validationFields = () => {
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const validationName = cardName.length > 0;
    const validationDescription = cardDescription.length > 0;
    const validationImage = cardImage.length > 0;
    const validationRare = cardRare.length > 0;
    const maxValueUnits = 90;
    const maxValueGeral = 210;
    const validationAtribut1 = Number(cardAttr1) >= 0
    && Number(cardAttr1) <= maxValueUnits;
    const validationAtribut2 = Number(cardAttr2) >= 0
    && Number(cardAttr2) <= maxValueUnits;
    const validationAtribut3 = Number(cardAttr3) >= 0
    && Number(cardAttr3) <= maxValueUnits;
    const validationAtributs = (Number(cardAttr1) + Number(cardAttr2)
    + Number(cardAttr3)) <= maxValueGeral;

    this.setState({
      isSaveButtonDisabled: !(validationName && validationDescription && validationImage
        && validationRare && validationAtribut1 && validationAtribut2
        && validationAtribut3 && validationAtributs),
    });
  };

  onInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, this.validationFields);
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />

        <Card
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
