import React from 'react'
import PropTypes from 'prop-types'
import SubscribeBtn from './SubscribeBtn'
import DescribeBtn from './DescribeBtn'

function ClassItem (props) {
  return (
        <div>
              <h2>{props.classType.name}</h2>
                       <p> Начало занятия: {props.startDate}</p>
                       <p style={{ height: '250px' }}>{props.classType.description}</p>

                      {
                        !props.isBooked ? <SubscribeBtn onClick={props.onButtonClick} /> : <DescribeBtn onClick={props.onButtonClick} />
                      }
        </div>
  )
}

ClassItem.propTypes = {
  onButtonClick: PropTypes.func,
  classType: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  startDate: PropTypes.string,
  isBooked: PropTypes.bool
}

export default ClassItem
