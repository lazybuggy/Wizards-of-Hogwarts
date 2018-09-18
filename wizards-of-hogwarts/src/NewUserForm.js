import React from 'react';
import './NewUserForm.css';

class NewUserForm extends React.Component{

    render(){
      return(
          <form class="style">
            <label>
              First Name: <input name="firstName" type="text"></input>
            </label>
          </form>
      );
    }
  }

  export default NewUserForm