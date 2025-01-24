
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { CustomerLicenseReasonType, Filter } from '../types'

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

export type CustomerLicenseReasonTypesListState = {
    tableData: TableQueries
    filterData: Filter
    selectedCustomerLicenseReasonType: Partial<CustomerLicenseReasonType>[]
}

type CustomerLicenseReasonTypesListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedCustomerLicenseReasonType: (checked: boolean, customerLicenseReasonType: CustomerLicenseReasonType) => void
    setSelectAllCustomerLicenseReasonType: (customerLicenseReasonType: CustomerLicenseReasonType[]) => void
}

const initialState: CustomerLicenseReasonTypesListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedCustomerLicenseReasonType: [],
}

export const useCustomerLicenseReasonTypeListStore = create<
    CustomerLicenseReasonTypesListState & CustomerLicenseReasonTypesListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedCustomerLicenseReasonType: (checked, row) =>
        set((state) => {
            const prevData = state.selectedCustomerLicenseReasonType
            if (checked) {
                return { selectedCustomerLicenseReasonType: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevCustomerLicenseReasonType) => row.id === prevCustomerLicenseReasonType.id)
                ) {
                    return {
                        selectedCustomerLicenseReasonType: prevData.filter(
                            (prevCustomerLicenseReasonType) => prevCustomerLicenseReasonType.id !== row.id,
                        ),
                    }
                }
                return { selectedCustomerLicenseReasonType: prevData }
            }
        }),
    setSelectAllCustomerLicenseReasonType: (row) => set(() => ({ selectedCustomerLicenseReasonType: row })),
}))

