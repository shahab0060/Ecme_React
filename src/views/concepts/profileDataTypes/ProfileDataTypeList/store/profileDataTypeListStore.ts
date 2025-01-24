
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { ProfileDataType, Filter } from '../types'

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

export type ProfileDataTypesListState = {
    tableData: TableQueries
    filterData: Filter
    selectedProfileDataType: Partial<ProfileDataType>[]
}

type ProfileDataTypesListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedProfileDataType: (checked: boolean, profileDataType: ProfileDataType) => void
    setSelectAllProfileDataType: (profileDataType: ProfileDataType[]) => void
}

const initialState: ProfileDataTypesListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedProfileDataType: [],
}

export const useProfileDataTypeListStore = create<
    ProfileDataTypesListState & ProfileDataTypesListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedProfileDataType: (checked, row) =>
        set((state) => {
            const prevData = state.selectedProfileDataType
            if (checked) {
                return { selectedProfileDataType: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevProfileDataType) => row.id === prevProfileDataType.id)
                ) {
                    return {
                        selectedProfileDataType: prevData.filter(
                            (prevProfileDataType) => prevProfileDataType.id !== row.id,
                        ),
                    }
                }
                return { selectedProfileDataType: prevData }
            }
        }),
    setSelectAllProfileDataType: (row) => set(() => ({ selectedProfileDataType: row })),
}))

