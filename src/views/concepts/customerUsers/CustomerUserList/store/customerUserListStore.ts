
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { CustomerUser, Filter } from '../types'

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

export type CustomerUsersListState = {
    tableData: TableQueries
    filterData: Filter
    selectedCustomerUser: Partial<CustomerUser>[]
}

type CustomerUsersListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedCustomerUser: (checked: boolean, customerUser: CustomerUser) => void
    setSelectAllCustomerUser: (customerUser: CustomerUser[]) => void
}

const initialState: CustomerUsersListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedCustomerUser: [],
}

export const useCustomerUserListStore = create<
    CustomerUsersListState & CustomerUsersListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedCustomerUser: (checked, row) =>
        set((state) => {
            const prevData = state.selectedCustomerUser
            if (checked) {
                return { selectedCustomerUser: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevCustomerUser) => row.id === prevCustomerUser.id)
                ) {
                    return {
                        selectedCustomerUser: prevData.filter(
                            (prevCustomerUser) => prevCustomerUser.id !== row.id,
                        ),
                    }
                }
                return { selectedCustomerUser: prevData }
            }
        }),
    setSelectAllCustomerUser: (row) => set(() => ({ selectedCustomerUser: row })),
}))

