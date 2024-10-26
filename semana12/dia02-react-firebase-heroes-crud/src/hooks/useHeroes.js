import { collection, query, getDocs } from 'firebase/firestore'

import { db } from '../services/firebase'

export const useHeroes = () => {
  const reference = collection(db, 'heroes')

  const fetchHeroes = async() => {
    const q = query(reference)

    const data = await getDocs(q)

    const results = []

    data.forEach(doc => {
      console.log(doc.id, doc.data())
    })
  }

  return {
    fetchHeroes
  }
}