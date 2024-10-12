import { useState } from 'react'

import AppointmentForm from '../components/appointments/AppointmentForm'
import AppointmentList from '../components/appointments/AppointmentList'

const Appointments = () => {
  const [appointments, setAppointments] = useState([])
  const [appointmentSelected, setAppointmentSelected] = useState({})

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

  // TODO: Añadir funcionalidad al boton Editar
  const handleEditAppointment = (appointment) => {
    setAppointmentSelected(appointment)
  }

  return (
    <>
      <AppointmentForm
        onSave={handleSaveAppointment}
        appointment={appointmentSelected}
      />
      <AppointmentList
        appointments={appointments}
        onRemove={handleRemoveAppointment}
        onEdit={handleEditAppointment}
      />
    </>
  )
}

// Exportación por defecto
export default Appointments