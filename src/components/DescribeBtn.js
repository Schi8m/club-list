import React from 'react'
import { API_URL, ENDPOINTS, HEADERS } from '../config'
import PropTypes from 'prop-types'

function SubscribeBtn (props) {
  async function cancelBooking (classId) {
    try {
      const answer = await fetch(`${API_URL}${ENDPOINTS.CancelClassBooking}`,
        {
          headers: HEADERS,
          method: 'POST',
          body: JSON.stringify({
            memberId: 1454,
            classId: classId
          })
        })
      const result = await answer.json()
      if (answer.status === 200) {
        alert('Запись отменена')
      } else {
        alert(result.errors[0].message)
      }
    } catch (e) {
      alert(e.message)
    }
    // props.checkStatus()
    // props.getBookedClasses()
    window.location.reload()
  }
  return (
    <button className="booking-btn-ds" onClick={() => cancelBooking(props.id)}>Отписаться</button>
  )
}

SubscribeBtn.propTypes = {
  id: PropTypes.number.isRequired,
  checkStatus: PropTypes.func.isRequired,
  getBookedClasses: PropTypes.func.isRequired
}

export default SubscribeBtn
