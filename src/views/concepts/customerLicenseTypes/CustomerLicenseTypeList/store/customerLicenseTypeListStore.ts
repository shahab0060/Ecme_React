
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { CustomerLicenseType, Filter } from '../types'

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

export type CustomerLicenseTypesListState = {
    tableData: TableQueries
    filterData: Filter
    selectedCustomerLicenseType: Partial<CustomerLicenseType>[]
}

type CustomerLicenseTypesListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedCustomerLicenseType: (checked: boolean, customerLicenseType: CustomerLicenseType) => void
    setSelectAllCustomerLicenseType: (customerLicenseType: CustomerLicenseType[]) => void
}

const initialState: CustomerLicenseTypesListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedCustomerLicenseType: [],
}

export const useCustomerLicenseTypeListStore = create<
    CustomerLicenseTypesListState & CustomerLicenseTypesListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedCustomerLicenseType: (checked, row) =>
        set((state) => {
            const prevData = state.selectedCustomerLicenseType
            if (checked) {
                return { selectedCustomerLicenseType: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevCustomerLicenseType) => row.id === prevCustomerLicenseType.id)
                ) {
                    return {
                        selectedCustomerLicenseType: prevData.filter(
                            (prevCustomerLicenseType) => prevCustomerLicenseType.id !== row.id,
                        ),
                    }
                }
                return { selectedCustomerLicenseType: prevData }
            }
        }),
    setSelectAllCustomerLicenseType: (row) => set(() => ({ selectedCustomerLicenseType: row })),
}))

