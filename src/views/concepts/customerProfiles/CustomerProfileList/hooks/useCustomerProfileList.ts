
import { apiGetCustomerProfilesList } from '@/services/CustomerProfilesService'
import useSWR from 'swr'
import { useCustomerProfileListStore } from '../store/customerProfileListStore'
import type { GetCustomerProfilesListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useCustomerProfileList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedCustomerProfile,
        setSelectedCustomerProfile,
        setSelectAllCustomerProfile,
        setFilterData,
    } = useCustomerProfileListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['CustomerProfile/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetCustomerProfilesList<GetCustomerProfilesListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const customerProfileList = data?.customerProfiles || []

    const customerProfileListTotal = data?.total || 0

    return {
        customerProfileList,
        customerProfileListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedCustomerProfile,
        setSelectedCustomerProfile,
        setSelectAllCustomerProfile,
        setFilterData,
    }
}
