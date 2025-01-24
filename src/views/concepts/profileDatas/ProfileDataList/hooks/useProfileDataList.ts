
import { apiGetProfileDatasList } from '@/services/ProfileDatasService'
import useSWR from 'swr'
import { useProfileDataListStore } from '../store/profileDataListStore'
import type { GetProfileDatasListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useProfileDataList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedProfileData,
        setSelectedProfileData,
        setSelectAllProfileData,
        setFilterData,
    } = useProfileDataListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['ProfileData/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetProfileDatasList<GetProfileDatasListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const profileDataList = data?.profileDatas || []

    const profileDataListTotal = data?.total || 0

    return {
        profileDataList,
        profileDataListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedProfileData,
        setSelectedProfileData,
        setSelectAllProfileData,
        setFilterData,
    }
}
