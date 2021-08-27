import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ClubItem from './ClubItem'
import { SET_CLUBS } from '../actions/clubsActions'
import { loadClubsList } from '../Api'

function ClubList () {
  const dispatch = useDispatch()
  const { clubs = [] } = useSelector(state => state.clubs)

  useEffect(() => {
    loadClubsList()
      .then(data => {
        dispatch({ type: SET_CLUBS, payload: data })
      })
      .catch(e => alert(e.message))
  }, [])

  return (
    <div className="app-div">
      <h1 style={{ textAlign: 'center' }}>Список клубов:</h1>
      <ul className="app-ul">
      {
      clubs.map(club => (
        <ClubItem key={club.id} {...club}/>
      ))}
      </ul>
    </div>
  )
}

export default ClubList
