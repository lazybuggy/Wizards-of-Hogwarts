import React, { Component} from 'react';
import { Form, Button } from 'semantic-ui-react';
import Typing from 'react-typing-animation';

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

        <Form>

          <Typing>
          <span>{this.props.question} </span>
          </Typing>
        

          <Button onClick={this.HufflepuffClicked}>{this.props.answers.hufflepuff}</Button>
          <Button onClick={this.RavenclawClicked}>{this.props.answers.ravenclaw}</Button>
          <Button onClick={this.SlytherinClicked}>{this.props.answers.slytherin}</Button>
          <Button onClick={this.GryffindorClicked}>{this.props.answers.gryffindor}</Button>

        </Form>
      )
         
    }
  }

  export default Question