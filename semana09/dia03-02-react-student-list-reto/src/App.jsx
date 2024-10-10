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
    <main className="">
      <h1 className="text-3xl text-center">Student List</h1>

      <div className="student__list">
        <div className="student__row">
          <div>AVATAR</div>
          <Avatar name="Victir" variant="beam" size={48}/>
          <div>NAME</div>
          <div>CIUDAD</div>
          <div>
            <button>✏</button>
            <button>❌</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App