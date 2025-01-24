
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Brand, Filter } from '../types'

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

export type BrandsListState = {
    tableData: TableQueries
    filterData: Filter
    selectedBrand: Partial<Brand>[]
}

type BrandsListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedBrand: (checked: boolean, brand: Brand) => void
    setSelectAllBrand: (brand: Brand[]) => void
}

const initialState: BrandsListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedBrand: [],
}

export const useBrandListStore = create<
    BrandsListState & BrandsListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedBrand: (checked, row) =>
        set((state) => {
            const prevData = state.selectedBrand
            if (checked) {
                return { selectedBrand: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevBrand) => row.id === prevBrand.id)
                ) {
                    return {
                        selectedBrand: prevData.filter(
                            (prevBrand) => prevBrand.id !== row.id,
                        ),
                    }
                }
                return { selectedBrand: prevData }
            }
        }),
    setSelectAllBrand: (row) => set(() => ({ selectedBrand: row })),
}))

