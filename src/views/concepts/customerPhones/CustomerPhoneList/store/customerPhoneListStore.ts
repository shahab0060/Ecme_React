
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { CustomerPhone, Filter } from '../types'

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

export type CustomerPhonesListState = {
    tableData: TableQueries
    filterData: Filter
    selectedCustomerPhone: Partial<CustomerPhone>[]
}

type CustomerPhonesListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedCustomerPhone: (checked: boolean, customerPhone: CustomerPhone) => void
    setSelectAllCustomerPhone: (customerPhone: CustomerPhone[]) => void
}

const initialState: CustomerPhonesListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedCustomerPhone: [],
}

export const useCustomerPhoneListStore = create<
    CustomerPhonesListState & CustomerPhonesListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedCustomerPhone: (checked, row) =>
        set((state) => {
            const prevData = state.selectedCustomerPhone
            if (checked) {
                return { selectedCustomerPhone: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevCustomerPhone) => row.id === prevCustomerPhone.id)
                ) {
                    return {
                        selectedCustomerPhone: prevData.filter(
                            (prevCustomerPhone) => prevCustomerPhone.id !== row.id,
                        ),
                    }
                }
                return { selectedCustomerPhone: prevData }
            }
        }),
    setSelectAllCustomerPhone: (row) => set(() => ({ selectedCustomerPhone: row })),
}))

