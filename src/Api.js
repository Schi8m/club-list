
import { API_URL, ENDPOINTS, HEADERS } from './config'
export const loadClassesList = async (startDate, endDate, clubid) => {
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
export const getBookedClasses = async () => {
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

export async function cancelBooking (classId) {
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
}

export async function bookClass (classId) {
  try {
    const answer = await fetch(`${API_URL}${ENDPOINTS.BookClass}`,
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
      alert('Вы успешно записаны!')
    } else {
      alert(result.errors[0].message)
    }
  } catch (e) {
    alert(e.message)
  }
}
