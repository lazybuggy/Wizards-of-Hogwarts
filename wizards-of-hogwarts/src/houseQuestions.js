import React, { Component } from 'react';
import Question from './Question'

class HouseQuestions extends Component{

    state = {
        question: 1,
        houses: [
            {
                name: 'Gryffindor',
                score: 0
            },
            {
                name: 'Ravenclaw',
                score: 0
            },
            {
                name: 'Hufflepuff',
                score: 0
            },
            {
                name: 'Slytherin',
                score: 0
            }
        ],
        questionsArray: [
            'Given the choice, would you rather invent a potion that would gurantee you...',
            'Which path do you take?',
            'How would you like to be known to history?',
            'You and 2 friends need to cross a bridge guarded by a river troll who insists on fighting 1 of you before he will let all of you pass. Do you...',
            'Which would you rather be...'
        ],
        answersArray: [
            {
                ravenclaw: 'Wisdom',
                slytherin: 'Power',
                hufflepuff: 'Love',
                gryffindor: 'Glory'
            },
            {
                ravenclaw: 'The cobblestone street lined with ancient buildings',
                slytherin: 'The narrow, dark, lantern-lit alley',
                hufflepuff: 'The wide, sunny, grassy lane',
                gryffindor: 'The twisting, leafy path through the woods'
            },
            {
                ravenclaw: 'The wise',
                slytherin: 'The Great',
                hufflepuff: 'The Good',
                gryffindor: 'The Bold'
            },
            {
                ravenclaw: 'Attempt to confuse the troll into letting all 3 of you pass without fighting',
                slytherin: 'Suggest that all 3 of you should fight (without telling the troll)',
                hufflepuff: 'Suggest drawing lots to decide which of you will fight',
                gryffindor: 'Volunteer to fight'
            },
            {
                ravenclaw: 'Imitated',
                slytherin: 'Feared',
                hufflepuff: 'Liked',
                gryffindor: 'Praised'
            }
        ]
    }

    gryffindorClicked = () => {
        const { question, houses } = this.state
        const updatedArray = [...houses]
        updatedArray[0].score = updatedArray[0].score + 1

        this.setState({
            question: question+1
        })
    }

    ravenclawClicked = () => {
        const { question, houses } = this.state
        const updatedArray = [...houses]
        updatedArray[1].score = updatedArray[1].score + 1

        this.setState({
            question: question+1
        })
    }

    hufflepuffClicked = () => {
        const { question, houses } = this.state
        const updatedArray = [...houses]
        updatedArray[2].score = updatedArray[2].score + 1

         this.setState({
            question: question+1
        })
    }

    slytherinClicked = () => {
        const { question, houses } = this.state
        const updatedArray = [...houses]
        updatedArray[3].score = updatedArray[3].score + 1

        this.setState({
            question: question+1
        })
    }

    DetermineHouse(){

        const { houses } = this.state
        
        const maxScore = Math.max(...Array.from(houses, house => house.score));
        const chosenHouse = houses.find(house => house.score === maxScore);

        console.log("WINning score "+maxScore);

        // this.props.setHouse('house',chosenHouse.name);

        return chosenHouse.name

    }


    render(){
        const {answersArray, questionsArray} = this.state;
        const answers = answersArray;
        const questions = questionsArray;

        console.log("state ..."+ this.state.question);
        console.log("REAL GRY"+this.state.houses[0].score);
        console.log("REAL rav"+this.state.houses[1].score);
        console.log("REAL huffle"+this.state.houses[2].score);
        console.log("REAL slythhhå"+this.state.houses[3].score);

        switch(this.state.question){
            case 1:
                return <Question
                    huffClicked={this.hufflepuffClicked}
                    slyClicked={this.slytherinClicked}
                    gryffClicked={this.gryffindorClicked}
                    ravenClicked={this.ravenclawClicked}
                    question={questions[0]}
                    answers = {answers[0]}
                />
            case 2:
                return <Question
                    huffClicked={this.hufflepuffClicked}
                    slyClicked={this.slytherinClicked}
                    gryffClicked={this.gryffindorClicked}
                    ravenClicked={this.ravenclawClicked}
                    question={questions[1]}
                    answers = {answers[1]}
                />
            case 3:
                return <Question
                    huffClicked={this.hufflepuffClicked}
                    slyClicked={this.slytherinClicked}
                    gryffClicked={this.gryffindorClicked}
                    ravenClicked={this.ravenclawClicked}
                    question={questions[2]}
                    answers = {answers[2]}
                />
            case 4:
                return <Question
                    huffClicked={this.hufflepuffClicked}
                    slyClicked={this.slytherinClicked}
                    gryffClicked={this.gryffindorClicked}
                    ravenClicked={this.ravenclawClicked}
                    question={questions[3]}
                    answers = {answers[3]}
                />
            case 5:
                return <Question
                    huffClicked={this.hufflepuffClicked}
                    slyClicked={this.slytherinClicked}
                    gryffClicked={this.gryffindorClicked}
                    ravenClicked={this.ravenclawClicked}
                    question={questions[4]}
                    answers = {answers[4]}
                />
            case 6:
                return <div>
                  {/* //  <h1>URGHH {this.DetermineHouse()}</h1> */}
                    <button onClick={this.props.setHouse(this.DetermineHouse())}>REVEAL HOUSE </button>
                    </div>
        }
    }
}

export default HouseQuestions