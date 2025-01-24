
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { CustomerFollowup, Filter } from '../types'

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

export type CustomerFollowupsListState = {
    tableData: TableQueries
    filterData: Filter
    selectedCustomerFollowup: Partial<CustomerFollowup>[]
}

type CustomerFollowupsListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedCustomerFollowup: (checked: boolean, customerFollowup: CustomerFollowup) => void
    setSelectAllCustomerFollowup: (customerFollowup: CustomerFollowup[]) => void
}

const initialState: CustomerFollowupsListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedCustomerFollowup: [],
}

export const useCustomerFollowupListStore = create<
    CustomerFollowupsListState & CustomerFollowupsListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedCustomerFollowup: (checked, row) =>
        set((state) => {
            const prevData = state.selectedCustomerFollowup
            if (checked) {
                return { selectedCustomerFollowup: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevCustomerFollowup) => row.id === prevCustomerFollowup.id)
                ) {
                    return {
                        selectedCustomerFollowup: prevData.filter(
                            (prevCustomerFollowup) => prevCustomerFollowup.id !== row.id,
                        ),
                    }
                }
                return { selectedCustomerFollowup: prevData }
            }
        }),
    setSelectAllCustomerFollowup: (row) => set(() => ({ selectedCustomerFollowup: row })),
}))

