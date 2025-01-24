
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { ActivityField, Filter } from '../types'

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

export type ActivityFieldsListState = {
    tableData: TableQueries
    filterData: Filter
    selectedActivityField: Partial<ActivityField>[]
}

type ActivityFieldsListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedActivityField: (checked: boolean, activityField: ActivityField) => void
    setSelectAllActivityField: (activityField: ActivityField[]) => void
}

const initialState: ActivityFieldsListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedActivityField: [],
}

export const useActivityFieldListStore = create<
    ActivityFieldsListState & ActivityFieldsListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedActivityField: (checked, row) =>
        set((state) => {
            const prevData = state.selectedActivityField
            if (checked) {
                return { selectedActivityField: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevActivityField) => row.id === prevActivityField.id)
                ) {
                    return {
                        selectedActivityField: prevData.filter(
                            (prevActivityField) => prevActivityField.id !== row.id,
                        ),
                    }
                }
                return { selectedActivityField: prevData }
            }
        }),
    setSelectAllActivityField: (row) => set(() => ({ selectedActivityField: row })),
}))

