
import useWorkerEventList from '../hooks/useWorkerEventList'
import WorkerEventListSearch from './WorkerEventListSearch'
import WorkerEventTableFilter from './WorkerEventListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const WorkerEventsListTableTools = () => {
    const { tableData, setTableData } = useWorkerEventList()

    const handleInputChange = (val: string) => {
        const newTableData = cloneDeep(tableData)
        newTableData.search = val
        newTableData.pageId = 1
        if (typeof val === 'string' && val.length > 1) {
            setTableData(newTableData)
        }

        if (typeof val === 'string' && val.length === 0) {
            setTableData(newTableData)
        }
    }

    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <WorkerEventListSearch onInputChange={handleInputChange} />
            <WorkerEventTableFilter />
        </div>
    )
}

export default WorkerEventsListTableTools
