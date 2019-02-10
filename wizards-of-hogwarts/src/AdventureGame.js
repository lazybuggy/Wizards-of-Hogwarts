import React, { Component } from 'react';
import UserDetails from './NewUserForm'
import HouseQuestions from './houseQuestions';

//main form

class AdventureGame extends Component{
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        bloodStatus: '',
        gender: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({ 
            step: step+1
        })
    }

    handleChange = input => event => {
        this.setState({
            [input] : event.target.value 
        })
    }
    render(){
        const {firstName, lastName, bloodStatus, gender} = this.state;
        const userValues = {firstName, lastName, bloodStatus, gender};
        
        switch(this.state.step){
            case 1:
                return <UserDetails
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values = {userValues}
                />
            case 2:
                return <HouseQuestions
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values = {userValues}
                />
                //return houseQuestionaire  .. WizardsHouse
            //case 3 is success
        }
    }
}

export default AdventureGame