
import { apiGetProductsList } from '@/services/ProductsService'
import useSWR from 'swr'
import { useProductListStore } from '../store/productListStore'
import type { GetProductsListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useProductList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedProduct,
        setSelectedProduct,
        setSelectAllProduct,
        setFilterData,
    } = useProductListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['Product/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetProductsList<GetProductsListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const productList = data?.products || []

    const productListTotal = data?.total || 0

    return {
        productList,
        productListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedProduct,
        setSelectedProduct,
        setSelectAllProduct,
        setFilterData,
    }
}
