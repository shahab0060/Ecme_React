
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { User, Filter } from '../types'

export const initialTableData: TableQueries = {
    pageId: 1,
    takeEntity: 10,
    search: '',
    sortType : 'Descending',
    sort:'0'
}

export const initialFilterData = {
    purchasedProducts: '',
    purchaseChannel: [
        'Retail Stores',
        'Online Retailers',
        'Resellers',
        'Mobile Apps',
        'Direct Sales',
    ],
}

export type UsersListState = {
    tableData: TableQueries
    filterData: Filter
    selectedUser: Partial<User>[]
}

type UsersListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedUser: (checked: boolean, user: User) => void
    setSelectAllUser: (user: User[]) => void
}

const initialState: UsersListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedUser: [],
}

export const useUserListStore = create<
    UsersListState & UsersListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedUser: (checked, row) =>
        set((state) => {
            const prevData = state.selectedUser
            if (checked) {
                return { selectedUser: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevUser) => row.id === prevUser.id)
                ) {
                    return {
                        selectedUser: prevData.filter(
                            (prevUser) => prevUser.id !== row.id,
                        ),
                    }
                }
                return { selectedUser: prevData }
            }
        }),
    setSelectAllUser: (row) => set(() => ({ selectedUser: row })),
}))

