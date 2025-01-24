
import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { WorkerEvent, Filter } from '../types'

export const initialTableData: TableQueries = {
    pageId: 1,
    takeEntity: 10,
    search: '',
    sortType : 'Descending',
    sort:'0'
}

export const initialFilterData = {
    purchasedProducts: '',
    purchaseChannel: [
        'Retail Stores',
        'Online Retailers',
        'Resellers',
        'Mobile Apps',
        'Direct Sales',
    ],
}

export type WorkerEventsListState = {
    tableData: TableQueries
    filterData: Filter
    selectedWorkerEvent: Partial<WorkerEvent>[]
}

type WorkerEventsListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedWorkerEvent: (checked: boolean, workerEvent: WorkerEvent) => void
    setSelectAllWorkerEvent: (workerEvent: WorkerEvent[]) => void
}

const initialState: WorkerEventsListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedWorkerEvent: [],
}

export const useWorkerEventListStore = create<
    WorkerEventsListState & WorkerEventsListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedWorkerEvent: (checked, row) =>
        set((state) => {
            const prevData = state.selectedWorkerEvent
            if (checked) {
                return { selectedWorkerEvent: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevWorkerEvent) => row.id === prevWorkerEvent.id)
                ) {
                    return {
                        selectedWorkerEvent: prevData.filter(
                            (prevWorkerEvent) => prevWorkerEvent.id !== row.id,
                        ),
                    }
                }
                return { selectedWorkerEvent: prevData }
            }
        }),
    setSelectAllWorkerEvent: (row) => set(() => ({ selectedWorkerEvent: row })),
}))

