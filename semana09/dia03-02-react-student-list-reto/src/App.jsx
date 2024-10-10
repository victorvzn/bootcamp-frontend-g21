import Avatar from "boring-avatars";
import { useState } from "react";

const App = () => {
  const DEFAULT_STUDENTS = [
    {
      id: "1",
      name: "Bulma",
      city: 'Chiclayo'
    },
    {
      id: "2",
      name: "Goku",
      city: 'Trujillo'
    },
    {
      id: "3",
      name: "Vegeta",
      city: 'Lima'
    }
  ]

  const [students, setStudents] = useState(DEFAULT_STUDENTS)

  const [form, setForm] = useState({
    id: null,
    name: '',
    city: ''
  })

  const handleSave = (event) => {
    event.preventDefault();

    const newStudent = {
      id: crypto.randomUUID(),
      name: "????",
      city: '???'
    }
    
    setStudents()
  }

  const handleChange = (event) => {
    const { name, value } = event.target // Lo que se escribe en la caja de texto

    setForm({ ...form, [name]: value })
  }

  return (
    <main className="w-96 mx-auto border rounded-lg mt-6 p-3">
      <h1 className="text-2xl text-center">Student List</h1>

      <form
        className="flex flex-col gap-3 bg-slate-50 p-3 rounded-lg border"
        onSubmit={handleSave}
      >
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-900">Name</span>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            type="text"
            name="name"
            placeholder="Ex. Victor Villazón"
            onChange={handleChange}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-900">City</span>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            type="text"
            name="city"
            placeholder="Ex. Chiclayo"
            onChange={handleChange}
          />
        </label>

        <div className="flex gap-3">
          <input
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            value='Save'
          />
          <input
            type="reset"
            className="text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            value="Limpiar"
          />
        </div>

        <pre>{JSON.stringify(form)}</pre>
      </form>

      <div className="student__list mt-3 flex flex-col gap-2">

        {/* {JSON.stringify(students)} */}

        {students.map(student => {
          return (
            <div key={student.id} className="student__row flex justify-between items-center gap-2 bg-slate-50 p-2 rounded-lg border">
              <Avatar name={student.name} variant="beam" size={48}/>
              <div className="text-left">{student.name}</div>
              <div className="text-left">{student.city}</div>
              <div className="flex gap-2">
                <button>✏</button>
                <button>❌</button>
              </div>
            </div>
          )
        })}

      </div>
    </main>
  )
}

export default App