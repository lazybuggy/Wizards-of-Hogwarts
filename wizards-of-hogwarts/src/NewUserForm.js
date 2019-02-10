import React, { Component} from 'react';
import { Form, Button, Dropdown } from 'semantic-ui-react';
import './NewUserForm.css';

class NewUserForm extends Component{

  startTheMagic = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }
    // changeHandler = event => {
    //   this.setState({
    //     name: event.target.value
    //   });
    // }

    render(){
      const {values} = this.props;
      return(
        <Form>
          <h1 className="ui centered">Welcome to Hogwarts School of Witchcraft and Wizardry! Who Might you be?</h1>
          <Form.Field>
          <label>First Name</label>
            <input 
              placeholder="First Name" 
              defaultValue={values.firstName} 
              onChange={this.props.handleChange('firstName')}>
            </input>
          </Form.Field>

          <Form.Field>
          <label>Last Name</label>
            <input 
              placeholder="Last Name" 
              defaultValue={values.lastName} 
              onChange={this.props.handleChange('lastName')}>
            </input>
          </Form.Field>

          <Form.Field>
          <label>What are you?</label>
            <Dropdown
              placeholder=""
              defaultValue={values.gender}
              fluid selection options={[
                {text:'Witch', value:'Witch'}, 
                {text:'Wizard', value:'Wizard'}]} 
              onChange={this.props.handleChange('gender')}
            />
          </Form.Field>

          <Form.Field>
          <label>What are you?</label>
            <Dropdown
              placeholder=""
              defaultValue={values.bloodStatus}
              fluid selection options={[
                {text:'Pure blood', value:'Pure blood'}, 
                {text:'Half blood', value:'Half blood'}, 
                {text:'Unknown', value:'Unknown'}]}
              onChange={this.props.handleChange('bloodStatus')}
            />
          </Form.Field>


          <Button onClick={this.startTheMagic}>Continue making magic </Button>

        </Form>
      )
         
    }
  }

  export default NewUserForm