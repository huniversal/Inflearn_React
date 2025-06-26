import { create } from "zustand"

const counterStore = create(() => ({
  count: 1
}))

export default counterStore