import React, { Component } from 'react';
import UserDetails from './NewUserForm'
import HouseQuestions from './houseQuestions';
import ChapterOne from './ChapterOne';
import './AdventureGame.css';

//main form

class AdventureGame extends Component{
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        bloodStatus: '',
        gender: '',
        house: '',
        characters:[],
        backgrounds: ['http://i.imgur.com/CMWTqJx.jpg?1']
    }

    componentDidMount(){
        // fetch('/users')
        //   .then(res => res.json())
        //   .then(users => this.setState({users}));
    
        fetch('/characters')
          .then(res => res.json())
          .then(characters => this.setState({characters}));
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

    handleChangeDropdown = input => (e,data)=> {

        this.setState({
            [input]: data.value 
        })
    }

    setHouse = input => () => {
       const { house } = this.state
    
        this.setState({
            house : house+input
        })

        this.nextStep();
    }

    //this is where the user will be created and the game begins
    BeginGame = () => {

        console.log('Creating user ',this.state.firstName, this.state.lastName);

            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    house: this.state.house,
                    gender: this.state.gender,
                    bloodStatus: this.state.bloodStatus
                })
              };
              
              fetch("http://localhost:3001/users", options)
                .then(response => response.json())
                .then(data =>console.log(data));
        
        this.nextStep();
    }

    render(){
        const {firstName, lastName, bloodStatus, gender, house } = this.state;
        const userValues = {firstName, lastName, bloodStatus, gender};
        const userHouse = house;

        switch(this.state.step){
            case 1:
                return  <div className="App">
                    <UserDetails
                        nextStep={this.nextStep}
                        handleChange = {this.handleChange}
                        handleChangeDropdown = {this.handleChangeDropdown}
                        values = {userValues}
                    />
                </div>
            case 2:
                return <div className="App">
                    <HouseQuestions
                        nextStep={this.nextStep}
                        setHouse={this.setHouse}
                    />
                </div>
                //return houseQuestionaire  .. WizardsHouse
            //case 3 is success
            case 3:
                return <div className="App">
                    <h2>{firstName} {lastName}</h2>
                    <h2> bloodStatus: {bloodStatus}</h2>
                    <h3> gender: {gender}</h3>
                    <h1>you are a {userHouse} !!!!!!!!!</h1>
                    <button onClick={this.BeginGame}>Enter the Magical world of Hogwarts </button>
                </div>
            case 4:
               // var divStyle = {background: 'url('+ this.state.backgrounds[0]+') no-repeat fixed'}
                document.body.style.background = 'url('+ this.state.backgrounds[0]+') no-repeat fixed';
                return <div className="App">
                    <h1>chapter 1</h1>
                    <ChapterOne
                        nextStep={this.nextStep}
                    />  
                </div>
        }
    }
}

export default AdventureGame