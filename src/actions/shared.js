import { getInitialData, saveQuestion } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'logged-out'

export default function handleInitialData () {
    return async (dispatch) => {
      dispatch(showLoading())
      const { users, questions } = await getInitialData()
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
      dispatch(setAuthedUser(AUTHED_ID))
      dispatch(hideLoading())

    }
}