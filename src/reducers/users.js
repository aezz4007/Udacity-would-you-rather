import { RECEIVE_USERS } from '../actions/users'
import { USER_ADD_QUESTION } from '../actions/users'
import { USER_ADD_ANSWER } from '../actions/users';

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        
        case USER_ADD_QUESTION:
                const { id, author } = action;

                return {
                  ...state,
                  [author]: {
                    ...state[author],
                    questions: state[author].questions.concat(id)
                  }
                };
          
        case USER_ADD_ANSWER:
          const { authedUser, qid, answer } = action;

          return {
            ...state,
            [authedUser]: {
              ...state[authedUser],
              answers: {
                ...state[authedUser].answers,
                [qid]: answer
              }
            }
          };    
        default:
            return state
    }
}