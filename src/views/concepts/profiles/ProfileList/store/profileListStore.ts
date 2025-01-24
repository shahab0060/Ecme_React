
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Profile, Filter } from '../types'

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

export type ProfilesListState = {
    tableData: TableQueries
    filterData: Filter
    selectedProfile: Partial<Profile>[]
}

type ProfilesListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedProfile: (checked: boolean, profile: Profile) => void
    setSelectAllProfile: (profile: Profile[]) => void
}

const initialState: ProfilesListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedProfile: [],
}

export const useProfileListStore = create<
    ProfilesListState & ProfilesListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedProfile: (checked, row) =>
        set((state) => {
            const prevData = state.selectedProfile
            if (checked) {
                return { selectedProfile: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevProfile) => row.id === prevProfile.id)
                ) {
                    return {
                        selectedProfile: prevData.filter(
                            (prevProfile) => prevProfile.id !== row.id,
                        ),
                    }
                }
                return { selectedProfile: prevData }
            }
        }),
    setSelectAllProfile: (row) => set(() => ({ selectedProfile: row })),
}))

