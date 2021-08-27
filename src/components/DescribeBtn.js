import React from 'react'
import PropTypes from 'prop-types'

function SubscribeBtn (props) {
  return (
    <button className="booking-btn-ds" onClick={props.onClick}>Отписаться</button>
  )
}

SubscribeBtn.propTypes = {
  onClick: PropTypes.func
}

export default SubscribeBtn
