export const fetchStudents = async () => {
  const url = 'https://67074c39a0e04071d229b837.mockapi.io/api/v1/students'

  const response = await fetch(url)

  return await response.json()
}

// Crearemos una petición del tipo POST para el endpoint /students
export const createStudent = async (data) => {
  const url = 'https://67074c39a0e04071d229b837.mockapi.io/api/v1/students'

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Mimetypes
    },
    body: JSON.stringify(data)
  }

  const response = await fetch(url, options)

  return await response.json()
}

