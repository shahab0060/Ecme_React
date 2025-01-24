
import { apiGetProfileDataTypesList } from '@/services/ProfileDataTypesService'
import useSWR from 'swr'
import { useProfileDataTypeListStore } from '../store/profileDataTypeListStore'
import type { GetProfileDataTypesListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useProfileDataTypeList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedProfileDataType,
        setSelectedProfileDataType,
        setSelectAllProfileDataType,
        setFilterData,
    } = useProfileDataTypeListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['ProfileDataType/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetProfileDataTypesList<GetProfileDataTypesListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const profileDataTypeList = data?.profileDataTypes || []

    const profileDataTypeListTotal = data?.total || 0

    return {
        profileDataTypeList,
        profileDataTypeListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedProfileDataType,
        setSelectedProfileDataType,
        setSelectAllProfileDataType,
        setFilterData,
    }
}
