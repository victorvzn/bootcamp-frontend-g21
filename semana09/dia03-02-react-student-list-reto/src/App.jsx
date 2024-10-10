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

  return (
    <main className="w-96 mx-auto border rounded-lg mt-6 p-3">
      <h1 className="text-2xl text-center">Student List</h1>

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