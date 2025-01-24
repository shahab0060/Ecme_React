
import { apiGetProfilesList } from '@/services/ProfilesService'
import useSWR from 'swr'
import { useProfileListStore } from '../store/profileListStore'
import type { GetProfilesListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useProfileList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedProfile,
        setSelectedProfile,
        setSelectAllProfile,
        setFilterData,
    } = useProfileListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['Profile/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetProfilesList<GetProfilesListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const profileList = data?.profiles || []

    const profileListTotal = data?.total || 0

    return {
        profileList,
        profileListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedProfile,
        setSelectedProfile,
        setSelectAllProfile,
        setFilterData,
    }
}
