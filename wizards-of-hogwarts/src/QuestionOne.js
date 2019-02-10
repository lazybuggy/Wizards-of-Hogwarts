import React, { Component} from 'react';
import { Form, Button, Dropdown } from 'semantic-ui-react';

class QuestionOne extends Component{

  ContinueQs = (house) => {
  //  e.preventDefault()
    this.props.nextQuestion(house)
  }
    // changeHandler = event => {
    //   this.setState({
    //     name: event.target.value
    //   });
    // }

    render(){
    //  const {values} = this.props;
      return(
        <Form>
          

          <Button onClick={this.ContinueQs('hufflepuff')}>Hufflepuff</Button>
          <Button onClick={this.ContinueQs('ravenclaw')}>Ravenclaw</Button>
          <Button onClick={this.ContinueQs('slytherin')}>Slyterin </Button>

          <Button onClick={this.ContinueQs('gryffindor')}>Gryffindor </Button>

        </Form>
      )
         
    }
  }

  export default QuestionOne