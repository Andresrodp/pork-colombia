import { create } from "zustand";

const useStoreData = create((set) => ({
  email: '',
  name: '',
  photo: null,
  setPhoto: (photo) => set({ photo }),
  setEmail: (email) => set({ email }),
  setName: (name) => set({ name }),
}));

export default useStoreData;