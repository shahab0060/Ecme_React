
import { apiGetCustomerIpsList } from '@/services/CustomerIpsService'
import useSWR from 'swr'
import { useCustomerIpListStore } from '../store/customerIpListStore'
import type { GetCustomerIpsListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useCustomerIpList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedCustomerIp,
        setSelectedCustomerIp,
        setSelectAllCustomerIp,
        setFilterData,
    } = useCustomerIpListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['CustomerIp/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetCustomerIpsList<GetCustomerIpsListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const customerIpList = data?.customerIps || []

    const customerIpListTotal = data?.total || 0

    return {
        customerIpList,
        customerIpListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedCustomerIp,
        setSelectedCustomerIp,
        setSelectAllCustomerIp,
        setFilterData,
    }
}
