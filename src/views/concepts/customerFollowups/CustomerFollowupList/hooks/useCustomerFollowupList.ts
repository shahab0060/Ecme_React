
import { apiGetCustomerFollowupsList } from '@/services/CustomerFollowupsService'
import useSWR from 'swr'
import { useCustomerFollowupListStore } from '../store/customerFollowupListStore'
import type { GetCustomerFollowupsListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useCustomerFollowupList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedCustomerFollowup,
        setSelectedCustomerFollowup,
        setSelectAllCustomerFollowup,
        setFilterData,
    } = useCustomerFollowupListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['CustomerFollowup/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetCustomerFollowupsList<GetCustomerFollowupsListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const customerFollowupList = data?.customerFollowups || []

    const customerFollowupListTotal = data?.total || 0

    return {
        customerFollowupList,
        customerFollowupListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedCustomerFollowup,
        setSelectedCustomerFollowup,
        setSelectAllCustomerFollowup,
        setFilterData,
    }
}
