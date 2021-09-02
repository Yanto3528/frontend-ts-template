import { useState, useEffect, SetStateAction, Dispatch } from 'react'

export function useLocalStorage<T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState(() => {
    const value = JSON.parse(localStorage.getItem(key) as string)
    return value || defaultValue
  })

  useEffect(() => {
    if (state === undefined || state === null) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(state))
    }
  }, [state, key])

  return [state, setState]
}
