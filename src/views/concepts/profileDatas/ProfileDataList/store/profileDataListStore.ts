
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { ProfileData, Filter } from '../types'

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

export type ProfileDatasListState = {
    tableData: TableQueries
    filterData: Filter
    selectedProfileData: Partial<ProfileData>[]
}

type ProfileDatasListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedProfileData: (checked: boolean, profileData: ProfileData) => void
    setSelectAllProfileData: (profileData: ProfileData[]) => void
}

const initialState: ProfileDatasListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedProfileData: [],
}

export const useProfileDataListStore = create<
    ProfileDatasListState & ProfileDatasListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedProfileData: (checked, row) =>
        set((state) => {
            const prevData = state.selectedProfileData
            if (checked) {
                return { selectedProfileData: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevProfileData) => row.id === prevProfileData.id)
                ) {
                    return {
                        selectedProfileData: prevData.filter(
                            (prevProfileData) => prevProfileData.id !== row.id,
                        ),
                    }
                }
                return { selectedProfileData: prevData }
            }
        }),
    setSelectAllProfileData: (row) => set(() => ({ selectedProfileData: row })),
}))

