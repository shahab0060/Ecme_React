
import { apiGetBrandsList } from '@/services/BrandsService'
import useSWR from 'swr'
import { useBrandListStore } from '../store/brandListStore'
import type { GetBrandsListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useBrandList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedBrand,
        setSelectedBrand,
        setSelectAllBrand,
        setFilterData,
    } = useBrandListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['Brand/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetBrandsList<GetBrandsListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const brandList = data?.brands || []

    const brandListTotal = data?.total || 0

    return {
        brandList,
        brandListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedBrand,
        setSelectedBrand,
        setSelectAllBrand,
        setFilterData,
    }
}
