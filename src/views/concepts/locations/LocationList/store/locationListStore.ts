
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Location, Filter } from '../types'

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

export type LocationsListState = {
    tableData: TableQueries
    filterData: Filter
    selectedLocation: Partial<Location>[]
}

type LocationsListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedLocation: (checked: boolean, location: Location) => void
    setSelectAllLocation: (location: Location[]) => void
}

const initialState: LocationsListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedLocation: [],
}

export const useLocationListStore = create<
    LocationsListState & LocationsListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedLocation: (checked, row) =>
        set((state) => {
            const prevData = state.selectedLocation
            if (checked) {
                return { selectedLocation: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevLocation) => row.id === prevLocation.id)
                ) {
                    return {
                        selectedLocation: prevData.filter(
                            (prevLocation) => prevLocation.id !== row.id,
                        ),
                    }
                }
                return { selectedLocation: prevData }
            }
        }),
    setSelectAllLocation: (row) => set(() => ({ selectedLocation: row })),
}))

