import { useState } from 'react'

import AppointmentForm from '../components/appointments/AppointmentForm'
import AppointmentList from '../components/appointments/AppointmentList'

const Appointments = () => {
  const [appointments, setAppointments] = useState([])

  const handleSaveAppointment = (newAppointment) => {
    console.log('Me estan llamando al guardar el form desde el componente padre', newAppointment)

    setAppointments([...appointments, newAppointment])
  }

  const handleRemoveAppointment = (id) => {
    console.log(id)

    const newAppointments = appointments.filter(
      appointment => appointment.id !== id
    )

    setAppointments(newAppointments)
  }

  return (
    <>
      <AppointmentForm
        onSave={handleSaveAppointment}
      />
      <AppointmentList
        appointments={appointments}
        onRemove={handleRemoveAppointment}
      />
    </>
  )
}

// Exportación por defecto
export default Appointments