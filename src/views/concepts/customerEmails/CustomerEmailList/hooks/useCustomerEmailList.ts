
import { apiGetCustomerEmailsList } from '@/services/CustomerEmailsService'
import useSWR from 'swr'
import { useCustomerEmailListStore } from '../store/customerEmailListStore'
import type { GetCustomerEmailsListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useCustomerEmailList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedCustomerEmail,
        setSelectedCustomerEmail,
        setSelectAllCustomerEmail,
        setFilterData,
    } = useCustomerEmailListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['CustomerEmail/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetCustomerEmailsList<GetCustomerEmailsListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const customerEmailList = data?.customerEmails || []

    const customerEmailListTotal = data?.total || 0

    return {
        customerEmailList,
        customerEmailListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedCustomerEmail,
        setSelectedCustomerEmail,
        setSelectAllCustomerEmail,
        setFilterData,
    }
}
