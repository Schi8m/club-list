import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { CHANGE_CLUB_ID } from '../actions/loadActions'
import { REMEMBER_CLUB_NAME } from '../actions/clubsActions'

function ClubItem (props) {
  const history = useHistory()
  const dispatch = useDispatch()
  function toClassList () {
    history.push('/classes/' + props.id)
    dispatch({ type: CHANGE_CLUB_ID, id: props.id })
    dispatch({ type: REMEMBER_CLUB_NAME, currentClub: props.name })
  }
  return (
       <li onClick={toClassList} className="app-li">
           {props.name}
       </li>
  )
}
ClubItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}
export default ClubItem
