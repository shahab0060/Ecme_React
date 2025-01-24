
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { Product, Filter } from '../types'

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

export type ProductsListState = {
    tableData: TableQueries
    filterData: Filter
    selectedProduct: Partial<Product>[]
}

type ProductsListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedProduct: (checked: boolean, product: Product) => void
    setSelectAllProduct: (product: Product[]) => void
}

const initialState: ProductsListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedProduct: [],
}

export const useProductListStore = create<
    ProductsListState & ProductsListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedProduct: (checked, row) =>
        set((state) => {
            const prevData = state.selectedProduct
            if (checked) {
                return { selectedProduct: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevProduct) => row.id === prevProduct.id)
                ) {
                    return {
                        selectedProduct: prevData.filter(
                            (prevProduct) => prevProduct.id !== row.id,
                        ),
                    }
                }
                return { selectedProduct: prevData }
            }
        }),
    setSelectAllProduct: (row) => set(() => ({ selectedProduct: row })),
}))

