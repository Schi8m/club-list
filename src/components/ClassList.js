import React, { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { GET_BOOKED_CLASSES, SET_CLASS } from '../actions/classesActions'
import { API_URL, ENDPOINTS, HEADERS } from '../config'
import ClassItem from './ClassItem'

function ClassList () {
  const styles = ['classes-card']
  const dispatch = useDispatch()
  const { clubid } = useParams()
  const state = useSelector(state => state.classes)
  useEffect(() => {
    loadClassesList()
      .then(data => {
        dispatch({ type: SET_CLASS, payload: data })
      })
  }, [])
  useEffect(() => {
    getBookedClasses()
      .then(data => {
        dispatch({ type: GET_BOOKED_CLASSES, payload: data })
      })
  }, [])

  const [startDate, endDate] = useMemo(() => {
    const startDate = new Date()
    startDate.setHours(0, 0, 0, 0)
    const endDate = new Date()
    endDate.setHours(23, 59, 59)
    return [startDate.toISOString(), endDate.toISOString()]
  }, [])
  const loadClassesList = async () => {
    try {
      const result = await fetch(`${API_URL}${ENDPOINTS.Classes}?$filter=startDate gt ${startDate} AND startDate lt ${endDate} AND clubID eq ${clubid}&$expand=classType&$orderby=startDate`, {
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
  const getBookedClasses = async () => {
    try {
      const result = await fetch(`${API_URL}${ENDPOINTS.ClassBookings}?$filter=memberId eq 1454 AND isCanceled eq false`, {
        headers: HEADERS,
        method: 'GET'
      })
      const data = await result.json()
      console.log(data)
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
      <div style={{ textAlign: 'center' }}>
          <h1>{state.currentClub}</h1>
        <div className="classes-board">
           {
               state.classes.map((classItem = {}) =>
                   <div className={styles.join(' ')} key={classItem.id}>
                     <ClassItem {...classItem} getBookedClasses = { getBookedClasses }/>
                    </div>
               )
           }
      </div>
      </div>
  )
}

export default ClassList
