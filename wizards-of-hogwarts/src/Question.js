import React, { Component} from 'react';
import { Form, Button } from 'semantic-ui-react';
import Typing from 'react-typing-animation';
import Typist from 'react-typist';

class Question extends Component{

  HufflepuffClicked = (e) => {
    e.preventDefault()
    this.props.huffClicked()
  }

  GryffindorClicked = (e) => {
    e.preventDefault()
    this.props.gryffClicked()
  }

  RavenclawClicked = (e) => {
    e.preventDefault()
    this.props.ravenClicked()
  }

  SlytherinClicked = (e) => {
    e.preventDefault()
    this.props.slyClicked()
  }
    // changeHandler = event => {
    //   this.setState({
    //     name: event.target.value
    //   });
    // }

    render(){
    
      return(
<div>
        {/* <Typist cursor={{ hideWhenDone: true }}>
          {this.props.question} 
        </Typist>

        {this.props.question}  */}
        <Form>

          <h1> {this.props.question}</h1>

          <Button onClick={this.HufflepuffClicked}>{this.props.answers.hufflepuff}</Button>
          <Button onClick={this.RavenclawClicked}>{this.props.answers.ravenclaw}</Button>
          <Button onClick={this.SlytherinClicked}>{this.props.answers.slytherin}</Button>
          <Button onClick={this.GryffindorClicked}>{this.props.answers.gryffindor}</Button>

        </Form>
        </div>
      )
         
    }
  }

  export default Question