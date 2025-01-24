
import { apiGetCustomerTitlesList } from '@/services/CustomerTitlesService'
import useSWR from 'swr'
import { useCustomerTitleListStore } from '../store/customerTitleListStore'
import type { GetCustomerTitlesListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useCustomerTitleList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedCustomerTitle,
        setSelectedCustomerTitle,
        setSelectAllCustomerTitle,
        setFilterData,
    } = useCustomerTitleListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['CustomerTitle/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetCustomerTitlesList<GetCustomerTitlesListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const customerTitleList = data?.customerTitles || []

    const customerTitleListTotal = data?.total || 0

    return {
        customerTitleList,
        customerTitleListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedCustomerTitle,
        setSelectedCustomerTitle,
        setSelectAllCustomerTitle,
        setFilterData,
    }
}
