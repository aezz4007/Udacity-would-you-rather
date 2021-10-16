import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class Answered extends Component {
 
      render() {
          const {questions, users, authedUser} = this.props

          const AnsweredIds = Object.keys(this.props.questions).filter((questionID)=>
    (users[authedUser]
        .answers.hasOwnProperty(questionID)))

     const answeredQuestions = Object.values(questions)
    .filter(question => AnsweredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
             
  return (
      
      <div>
            {Object.values(answeredQuestions).map((question=>(
                <li className="form" key={question.id}>
                <p> <img src={users[question.author].avatarURL} alt={users[question.author].id} /> </p>
                <h3>{question.author} says:</h3>
                <h3>Would you rather ... </h3>
                <p>{question.optionOne.text}</p>
                <p>Or ... </p>
                <Link className="button" to ={`/questions/${question.id}`} >View Question</Link>
                </li>
            )))}
 </div>
    )
  }
}


function mapStateToProps({questions , users , authedUser}) {
  return {
    questions,
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Answered)