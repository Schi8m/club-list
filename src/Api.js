
import { API_URL, ENDPOINTS, HEADERS } from './config'

export const loadClassesList = async (startDate, endDate, clubid) => {
  const result = await fetch(`${API_URL}${ENDPOINTS.Classes}?$filter=startDate gt ${startDate} AND startDate lt ${endDate} AND clubID eq ${clubid}&$expand=classType&$orderby=startDate`, {
    headers: HEADERS,
    method: 'GET'
  })
  const data = await result.json()
  if (result.status === 200) {
    return data.value
  } else {
    throw new Error(data.errors[0].message)
  }
}
export const getBookedClasses = async () => {
  const result = await fetch(`${API_URL}${ENDPOINTS.ClassBookings}?$filter=memberId eq 1454 AND isCanceled eq false`, {
    headers: HEADERS,
    method: 'GET'
  })
  const data = await result.json()
  console.log(data)
  if (result.status === 200) {
    return data.value
  } else {
    throw new Error(data.errors[0].message)
  }
}

export async function cancelBooking (classId) {
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
    return true
  } else {
    throw new Error(result.errors[0].message)
  }
}

export async function bookClass (classId) {
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
    return true
  } else {
    throw new Error(result.errors[0].message)
  }
}

export const loadClubsList = async () => {
  const result = await fetch(`${API_URL}${ENDPOINTS.Clubs}?$filter=isDeleted eq false`, {
    headers: HEADERS,
    method: 'GET'
  })
  const data = await result.json()
  if (result.status === 200) {
    return data.value
  } else {
    throw new Error(data.errors[0].message)
  }
}
