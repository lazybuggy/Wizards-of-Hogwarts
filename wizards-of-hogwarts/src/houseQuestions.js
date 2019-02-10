import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'
import QuestionOne from './QuestionOne'

class HouseQuestions extends Component{

    state = {
        question: 1,
        gryffindor: 0,
        hufflepuff: 0,
        ravenclaw: 0,
        slytherin: 0
    }

    nextQuestion = (house) => {
        const { question, gryffindor, hufflepuff,ravenclaw,slytherin } = this.state
        if(house == 'gryffindor'){
            this.setState({
                gryffindor: gryffindor+1
            })
        }else if(house == 'hufflepuff'){
            this.setState({
                hufflepuff: hufflepuff+1
            })
        }else if(house == 'ravenclaw'){
            this.setState({
                ravenclaw: ravenclaw+1
            })
        }else{
            this.setState({
                slytherin: slytherin+1
            })
        }
        this.setState({ 
            question: question+1
        })
    }

    handleChange = input => event => {
        this.setState({
            [input] : event.target.value 
        })
    }
    render(){
        //const {gryffindor, slytherin, hufflepuff, ravenclaw} = this.state;
        //const userValues = {firstName, lastName, bloodStatus, gender};
        
        console.log("slty"+this.state.slytherin);
        console.log("huffle"+this.state.hufflepuff);
        console.log("raven"+this.state.ravenclaw);
        console.log("gry"+this.state.gryffindor);

        switch(this.state.question){
            case 1:
                return <QuestionOne
                    nextQuestion={this.nextQuestion}
                    handleChange = {this.handleChange}
                   // values = {userValues}
                />
            case 2:
                //return houseQuestionaire  .. WizardsHouse
            //case 3 is success
        }
    }
}

export default HouseQuestions