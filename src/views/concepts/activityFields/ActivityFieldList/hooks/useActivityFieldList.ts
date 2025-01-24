
import { apiGetActivityFieldsList } from '@/services/ActivityFieldsService'
import useSWR from 'swr'
import { useActivityFieldListStore } from '../store/activityFieldListStore'
import type { GetActivityFieldsListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useActivityFieldList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedActivityField,
        setSelectedActivityField,
        setSelectAllActivityField,
        setFilterData,
    } = useActivityFieldListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['ActivityField/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetActivityFieldsList<GetActivityFieldsListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const activityFieldList = data?.activityFields || []

    const activityFieldListTotal = data?.total || 0

    return {
        activityFieldList,
        activityFieldListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedActivityField,
        setSelectedActivityField,
        setSelectAllActivityField,
        setFilterData,
    }
}
