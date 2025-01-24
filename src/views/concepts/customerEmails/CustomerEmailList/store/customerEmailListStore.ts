
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { CustomerEmail, Filter } from '../types'

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

export type CustomerEmailsListState = {
    tableData: TableQueries
    filterData: Filter
    selectedCustomerEmail: Partial<CustomerEmail>[]
}

type CustomerEmailsListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedCustomerEmail: (checked: boolean, customerEmail: CustomerEmail) => void
    setSelectAllCustomerEmail: (customerEmail: CustomerEmail[]) => void
}

const initialState: CustomerEmailsListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedCustomerEmail: [],
}

export const useCustomerEmailListStore = create<
    CustomerEmailsListState & CustomerEmailsListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedCustomerEmail: (checked, row) =>
        set((state) => {
            const prevData = state.selectedCustomerEmail
            if (checked) {
                return { selectedCustomerEmail: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevCustomerEmail) => row.id === prevCustomerEmail.id)
                ) {
                    return {
                        selectedCustomerEmail: prevData.filter(
                            (prevCustomerEmail) => prevCustomerEmail.id !== row.id,
                        ),
                    }
                }
                return { selectedCustomerEmail: prevData }
            }
        }),
    setSelectAllCustomerEmail: (row) => set(() => ({ selectedCustomerEmail: row })),
}))

