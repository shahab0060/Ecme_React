
import { apiGetCustomerFollowupTypesList } from '@/services/CustomerFollowupTypesService'
import useSWR from 'swr'
import { useCustomerFollowupTypeListStore } from '../store/customerFollowupTypeListStore'
import type { GetCustomerFollowupTypesListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useCustomerFollowupTypeList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedCustomerFollowupType,
        setSelectedCustomerFollowupType,
        setSelectAllCustomerFollowupType,
        setFilterData,
    } = useCustomerFollowupTypeListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['CustomerFollowupType/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetCustomerFollowupTypesList<GetCustomerFollowupTypesListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const customerFollowupTypeList = data?.customerFollowupTypes || []

    const customerFollowupTypeListTotal = data?.total || 0

    return {
        customerFollowupTypeList,
        customerFollowupTypeListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedCustomerFollowupType,
        setSelectedCustomerFollowupType,
        setSelectAllCustomerFollowupType,
        setFilterData,
    }
}
