import React, { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { GET_BOOKED_CLASSES, SET_CLASS } from '../actions/classesActions'
import { cancelBooking, getBookedClasses, loadClassesList, bookClass } from '../Api'
import ClassItem from './ClassItem'

function ClassList () {
  const styles = ['classes-card']
  const dispatch = useDispatch()
  const { clubid } = useParams()
  const { classes, currentClub } = useSelector(state => state.classes)
  const { bookedClasses = [] } = useSelector(state => state.bookings)

  const classsesWithBookedInfo = useMemo(() => {
    return classes.map(classData => ({
      ...classData,
      isBooked: bookedClasses.reduce((prev, current) => {
        if (current.classId === classData.id) {
          return true
        }
        return prev
      }, false)
    }))
  }, [bookedClasses, classes])

  const [startDate, endDate] = useMemo(() => {
    const startDate = new Date()
    startDate.setHours(0, 0, 0, 0)
    const endDate = new Date()
    endDate.setHours(23, 59, 59)
    return [startDate.toISOString(), endDate.toISOString()]
  }, [])

  useEffect(() => {
    loadClassesList(startDate, endDate, clubid)
      .then(data => {
        dispatch({ type: SET_CLASS, payload: data })
      })
  }, [])

  const loadClasses = () => {
    getBookedClasses()
      .then(data => {
        dispatch({ type: GET_BOOKED_CLASSES, payload: data })
      })
      .catch(e => {})
  }

  useEffect(() => {
    loadClasses()
  }, [])

  const onClassItemClick = async (id, isBooked) => {
    const bookMethod = isBooked ? cancelBooking : bookClass
    try {
      await bookMethod(id)
      loadClasses()
    } catch (e) {}
  }

  return (
      <div style={{ textAlign: 'center' }}>
        <h1>{currentClub}</h1>
        <div className="classes-board">
           {
              classsesWithBookedInfo.map((classItem = {}) =>
                   <div className={styles.join(' ')} key={classItem.id}>
                     <ClassItem
                      {...classItem}
                      onButtonClick={() => onClassItemClick(classItem.id, classItem.isBooked)}
                    />
                    </div>
              )
           }
      </div>
      </div>
  )
}

export default ClassList
