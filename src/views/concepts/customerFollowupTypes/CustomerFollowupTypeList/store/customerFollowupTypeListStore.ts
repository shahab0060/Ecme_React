
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { CustomerFollowupType, Filter } from '../types'

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

export type CustomerFollowupTypesListState = {
    tableData: TableQueries
    filterData: Filter
    selectedCustomerFollowupType: Partial<CustomerFollowupType>[]
}

type CustomerFollowupTypesListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedCustomerFollowupType: (checked: boolean, customerFollowupType: CustomerFollowupType) => void
    setSelectAllCustomerFollowupType: (customerFollowupType: CustomerFollowupType[]) => void
}

const initialState: CustomerFollowupTypesListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedCustomerFollowupType: [],
}

export const useCustomerFollowupTypeListStore = create<
    CustomerFollowupTypesListState & CustomerFollowupTypesListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedCustomerFollowupType: (checked, row) =>
        set((state) => {
            const prevData = state.selectedCustomerFollowupType
            if (checked) {
                return { selectedCustomerFollowupType: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevCustomerFollowupType) => row.id === prevCustomerFollowupType.id)
                ) {
                    return {
                        selectedCustomerFollowupType: prevData.filter(
                            (prevCustomerFollowupType) => prevCustomerFollowupType.id !== row.id,
                        ),
                    }
                }
                return { selectedCustomerFollowupType: prevData }
            }
        }),
    setSelectAllCustomerFollowupType: (row) => set(() => ({ selectedCustomerFollowupType: row })),
}))

