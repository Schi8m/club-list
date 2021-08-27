import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import SubscribeBtn from './SubscribeBtn'
import DescribeBtn from './DescribeBtn'

function ClassItem (props) {
  let isBooked = true
  const checkStatus = () => {
    state.bookedClasses.forEach(booking => {
      ((booking.classId === props.id) & (isBooked !== false)) ? (isBooked = false) : (console.log('not eq'))
    })
  }
  const state = useSelector(state => state.bookings)
  checkStatus()
  return (
        <div>
              <h2>{props.classType.name}</h2>
                       <p> Начало занятия: {props.startDate}</p>
                       <p style={{ height: '250px' }}>{props.classType.description}</p>
                      {isBooked ? <SubscribeBtn id={props.id} checkStatus = { checkStatus } getBookedClasses = {props.getBookedClasses} /> : <DescribeBtn id={props.id} checkStatus = { checkStatus } getBookedClasses = {props.getBookedClasses} />}
        </div>
  )
}

ClassItem.propTypes = {
  classType: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  startDate: PropTypes.string,
  getBookedClasses: PropTypes.func.isRequired
}

export default ClassItem
