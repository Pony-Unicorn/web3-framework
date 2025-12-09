import { create } from 'zustand'

type State = {
  firstName: string
  lastName: string
  age: number
}

type Action = {
  updateFirstName: (firstName: State['firstName']) => void
  updateLastName: (lastName: State['lastName']) => void
  updateAge: (age: State['age']) => void
}

// 计算状态选择器 - 类似 useComputedState
type ComputedState = {
  fullName: string
  isAdult: boolean
  initials: string
}

export const usePersonStore = create<State & Action>((set) => ({
  firstName: '',
  lastName: '',
  age: 0,
  updateFirstName: (firstName) => set(() => ({ firstName })),
  updateLastName: (lastName) => set(() => ({ lastName })),
  updateAge: (age) => set(() => ({ age })),
}))

export const selectFullName = (state: State) =>
  `${state.firstName} ${state.lastName}`.trim()

export const selectIsAdult = (state: State) => state.age >= 18

export const selectInitials = (state: State) =>
  `${state.firstName.charAt(0)}${state.lastName.charAt(0)}`.toUpperCase()
