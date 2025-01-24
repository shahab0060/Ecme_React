
import { apiGetWorkerEventsList } from '@/services/WorkerEventsService'
import useSWR from 'swr'
import { useWorkerEventListStore } from '../store/workerEventListStore'
import type { GetWorkerEventsListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useWorkerEventList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedWorkerEvent,
        setSelectedWorkerEvent,
        setSelectAllWorkerEvent,
        setFilterData,
    } = useWorkerEventListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['WorkerEvent/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetWorkerEventsList<GetWorkerEventsListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const workerEventList = data?.workerEvents || []

    const workerEventListTotal = data?.total || 0

    return {
        workerEventList,
        workerEventListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedWorkerEvent,
        setSelectedWorkerEvent,
        setSelectAllWorkerEvent,
        setFilterData,
    }
}
