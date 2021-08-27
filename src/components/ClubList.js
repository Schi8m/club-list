import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ClubItem from './ClubItem'
import { API_URL, ENDPOINTS, HEADERS } from '../config'
import { SET_CLUBS } from '../actions/clubsActions'

function ClubList () {
  const dispatch = useDispatch()
  const { clubs = [] } = useSelector(state => state.clubs)

  useEffect(() => {
    loadClubsList()
      .then(data => {
        dispatch({ type: SET_CLUBS, payload: data })
      })
  }, [])

  const loadClubsList = async () => {
    try {
      const result = await fetch(`${API_URL}${ENDPOINTS.Clubs}?$filter=isDeleted eq false`, {
        headers: HEADERS,
        method: 'GET'
      })
      const data = await result.json()
      if (result.status === 200) {
        return data.value
      } else {
        alert(data.errors[0].message)
      }
    } catch (e) {
      alert(e.message)
    }
  }

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
