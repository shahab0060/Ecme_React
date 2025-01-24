
import { apiGetCustomerUsersList } from '@/services/CustomerUsersService'
import useSWR from 'swr'
import { useCustomerUserListStore } from '../store/customerUserListStore'
import type { GetCustomerUsersListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useCustomerUserList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedCustomerUser,
        setSelectedCustomerUser,
        setSelectAllCustomerUser,
        setFilterData,
    } = useCustomerUserListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['CustomerUser/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetCustomerUsersList<GetCustomerUsersListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const customerUserList = data?.customerUsers || []

    const customerUserListTotal = data?.total || 0

    return {
        customerUserList,
        customerUserListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedCustomerUser,
        setSelectedCustomerUser,
        setSelectAllCustomerUser,
        setFilterData,
    }
}
