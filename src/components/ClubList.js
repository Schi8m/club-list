import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ClubItem from './ClubItem'
import { LOAD_CLUBS } from '../actions/clubsActions'

function ClubList () {
  const dispatch = useDispatch()
  const { clubs = [] } = useSelector(state => state.clubs)

  useEffect(() => {
    dispatch({ type: LOAD_CLUBS })
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
