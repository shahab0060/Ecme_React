
import { apiGetUsersList } from '@/services/UsersService'
import useSWR from 'swr'
import { useUserListStore } from '../store/userListStore'
import type { GetUsersListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useUserList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedUser,
        setSelectedUser,
        setSelectAllUser,
        setFilterData,
    } = useUserListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['User/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetUsersList<GetUsersListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const userList = data?.users || []

    const userListTotal = data?.total || 0

    return {
        userList,
        userListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedUser,
        setSelectedUser,
        setSelectAllUser,
        setFilterData,
    }
}
