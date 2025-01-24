
import { apiGetLocationsList } from '@/services/LocationsService'
import useSWR from 'swr'
import { useLocationListStore } from '../store/locationListStore'
import type { GetLocationsListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useLocationList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedLocation,
        setSelectedLocation,
        setSelectAllLocation,
        setFilterData,
    } = useLocationListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['Location/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetLocationsList<GetLocationsListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const locationList = data?.locations || []

    const locationListTotal = data?.total || 0

    return {
        locationList,
        locationListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedLocation,
        setSelectedLocation,
        setSelectAllLocation,
        setFilterData,
    }
}
