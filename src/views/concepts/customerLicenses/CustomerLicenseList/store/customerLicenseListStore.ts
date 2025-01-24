
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { CustomerLicense, Filter } from '../types'

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

export type CustomerLicensesListState = {
    tableData: TableQueries
    filterData: Filter
    selectedCustomerLicense: Partial<CustomerLicense>[]
}

type CustomerLicensesListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedCustomerLicense: (checked: boolean, customerLicense: CustomerLicense) => void
    setSelectAllCustomerLicense: (customerLicense: CustomerLicense[]) => void
}

const initialState: CustomerLicensesListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedCustomerLicense: [],
}

export const useCustomerLicenseListStore = create<
    CustomerLicensesListState & CustomerLicensesListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedCustomerLicense: (checked, row) =>
        set((state) => {
            const prevData = state.selectedCustomerLicense
            if (checked) {
                return { selectedCustomerLicense: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevCustomerLicense) => row.id === prevCustomerLicense.id)
                ) {
                    return {
                        selectedCustomerLicense: prevData.filter(
                            (prevCustomerLicense) => prevCustomerLicense.id !== row.id,
                        ),
                    }
                }
                return { selectedCustomerLicense: prevData }
            }
        }),
    setSelectAllCustomerLicense: (row) => set(() => ({ selectedCustomerLicense: row })),
}))

