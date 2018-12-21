import React, { Component } from 'react';
import { ListView, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { Div, Input, Span ,H1} from './styles/styles';
import * as pessoaActions from './actions/pessoas';


class Pessoas extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  state = { nomePessoa: '', };

  addNewPessoa = () => {//Chama a action addPessoa 
    this.props.addPessoa(this.state.nomePessoa);
    this.setState({ nomePessoa: '' });
  }
  removePessoa = () => {//Chama a action removePessoa 
    this.props.removePessoa();
  }

  render() {
    return (
      <Div>
        <H1>Welcome to React Native Redux!</H1>
        {this.props.pessoas.map(pessoa => (
          
          <Span key={pessoa.id}>{pessoa.nome}</Span>
        ))}

        <Input
          onChangeText={(text) => this.setState({ nomePessoa: text })}
          value={this.state.nomePessoa}
        />
        <Button title="Cadastrar" onPress={this.addNewPessoa} />
        <Button title="Remover último" onPress={this.removePessoa} />
      </Div>
    );
  }
}

//pegando variaveis de estado
const mapStateToProps = state => ({
  pessoas: state.pessoas,
});

//pega os dados e retorna para o componente poder usar
const mapDispatchToProps = dispatch => bindActionCreators(pessoaActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pessoas);
