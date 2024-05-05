import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { IState } from '@/types'

const useGlobalStore = create<IState>()(devtools((set) => ({
    price: "",
    modal: false,

    changePrice: (value: string) => set({ price: value }),
    changeModal: (value: boolean) => set({ modal: value }),
})))

export default useGlobalStore