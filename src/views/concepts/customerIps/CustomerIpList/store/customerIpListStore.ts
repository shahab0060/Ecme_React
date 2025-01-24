
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { CustomerIp, Filter } from '../types'

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

export type CustomerIpsListState = {
    tableData: TableQueries
    filterData: Filter
    selectedCustomerIp: Partial<CustomerIp>[]
}

type CustomerIpsListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedCustomerIp: (checked: boolean, customerIp: CustomerIp) => void
    setSelectAllCustomerIp: (customerIp: CustomerIp[]) => void
}

const initialState: CustomerIpsListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedCustomerIp: [],
}

export const useCustomerIpListStore = create<
    CustomerIpsListState & CustomerIpsListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedCustomerIp: (checked, row) =>
        set((state) => {
            const prevData = state.selectedCustomerIp
            if (checked) {
                return { selectedCustomerIp: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevCustomerIp) => row.id === prevCustomerIp.id)
                ) {
                    return {
                        selectedCustomerIp: prevData.filter(
                            (prevCustomerIp) => prevCustomerIp.id !== row.id,
                        ),
                    }
                }
                return { selectedCustomerIp: prevData }
            }
        }),
    setSelectAllCustomerIp: (row) => set(() => ({ selectedCustomerIp: row })),
}))

