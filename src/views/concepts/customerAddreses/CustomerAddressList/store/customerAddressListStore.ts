
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { CustomerAddress, Filter } from '../types'

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

export type CustomerAddresesListState = {
    tableData: TableQueries
    filterData: Filter
    selectedCustomerAddress: Partial<CustomerAddress>[]
}

type CustomerAddresesListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedCustomerAddress: (checked: boolean, customerAddress: CustomerAddress) => void
    setSelectAllCustomerAddress: (customerAddress: CustomerAddress[]) => void
}

const initialState: CustomerAddresesListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedCustomerAddress: [],
}

export const useCustomerAddressListStore = create<
    CustomerAddresesListState & CustomerAddresesListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedCustomerAddress: (checked, row) =>
        set((state) => {
            const prevData = state.selectedCustomerAddress
            if (checked) {
                return { selectedCustomerAddress: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevCustomerAddress) => row.id === prevCustomerAddress.id)
                ) {
                    return {
                        selectedCustomerAddress: prevData.filter(
                            (prevCustomerAddress) => prevCustomerAddress.id !== row.id,
                        ),
                    }
                }
                return { selectedCustomerAddress: prevData }
            }
        }),
    setSelectAllCustomerAddress: (row) => set(() => ({ selectedCustomerAddress: row })),
}))

