import React, { Component} from 'react';
import { Form, Button, Dropdown } from 'semantic-ui-react';
import './NewUserForm.css';

class NewUserForm extends Component{

  // state = {
  //   genderSelection: null,
  //   bloodStatusSelection: null
  // }

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
      // const {genderSelection} = this.state;

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
              button className='icon'
              fluid labeled icon='user'
              placeholder="Might you be a wizard or a witch?"
              defaultValue={values.gender}
              fluid selection options={[
                {key:'wit', text:'Witch', value:'witch'}, 
                {key:'wiz', text:'Wizard', value:'wizard'}]} 
              onChange={this.props.handleChangeDropdown('gender')}
            />
          </Form.Field>

          <Form.Field>
          <label>What are you?</label>
            <Dropdown
              button className='icon'
              fluid labeled icon='tint'
              placeholder="What blood runs through your veins?"
              defaultValue={values.bloodStatus}
              fluid selection options={[
                {key:'pure', text:'Pure blood', value:'pure-blood'}, 
                {key:'half', text:'Half blood', value:'half-blood'}, 
                {key:'unkn', text:'Unknown', value:'unknown'}]}
              onChange={this.props.handleChangeDropdown('bloodStatus')}
            />
          </Form.Field>


          <Button onClick={this.startTheMagic}>Continue making magic </Button>

        </Form>
      )
         
    }
  }

  export default NewUserForm