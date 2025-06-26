import { create } from "zustand"

const counterStore = create((set) => ({
  count: 1,
  increase: () => set((state) => ({count: state.count + 1})),
}))

export default counterStore