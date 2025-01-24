
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { CustomerProfile, Filter } from '../types'

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

export type CustomerProfilesListState = {
    tableData: TableQueries
    filterData: Filter
    selectedCustomerProfile: Partial<CustomerProfile>[]
}

type CustomerProfilesListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedCustomerProfile: (checked: boolean, customerProfile: CustomerProfile) => void
    setSelectAllCustomerProfile: (customerProfile: CustomerProfile[]) => void
}

const initialState: CustomerProfilesListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedCustomerProfile: [],
}

export const useCustomerProfileListStore = create<
    CustomerProfilesListState & CustomerProfilesListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedCustomerProfile: (checked, row) =>
        set((state) => {
            const prevData = state.selectedCustomerProfile
            if (checked) {
                return { selectedCustomerProfile: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevCustomerProfile) => row.id === prevCustomerProfile.id)
                ) {
                    return {
                        selectedCustomerProfile: prevData.filter(
                            (prevCustomerProfile) => prevCustomerProfile.id !== row.id,
                        ),
                    }
                }
                return { selectedCustomerProfile: prevData }
            }
        }),
    setSelectAllCustomerProfile: (row) => set(() => ({ selectedCustomerProfile: row })),
}))

