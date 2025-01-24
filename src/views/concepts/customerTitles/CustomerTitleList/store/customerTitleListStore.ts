
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { CustomerTitle, Filter } from '../types'

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

export type CustomerTitlesListState = {
    tableData: TableQueries
    filterData: Filter
    selectedCustomerTitle: Partial<CustomerTitle>[]
}

type CustomerTitlesListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedCustomerTitle: (checked: boolean, customerTitle: CustomerTitle) => void
    setSelectAllCustomerTitle: (customerTitle: CustomerTitle[]) => void
}

const initialState: CustomerTitlesListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedCustomerTitle: [],
}

export const useCustomerTitleListStore = create<
    CustomerTitlesListState & CustomerTitlesListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedCustomerTitle: (checked, row) =>
        set((state) => {
            const prevData = state.selectedCustomerTitle
            if (checked) {
                return { selectedCustomerTitle: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevCustomerTitle) => row.id === prevCustomerTitle.id)
                ) {
                    return {
                        selectedCustomerTitle: prevData.filter(
                            (prevCustomerTitle) => prevCustomerTitle.id !== row.id,
                        ),
                    }
                }
                return { selectedCustomerTitle: prevData }
            }
        }),
    setSelectAllCustomerTitle: (row) => set(() => ({ selectedCustomerTitle: row })),
}))

