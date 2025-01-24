
import useActivityFieldList from '../hooks/useActivityFieldList'
import ActivityFieldListSearch from './ActivityFieldListSearch'
import ActivityFieldTableFilter from './ActivityFieldListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const ActivityFieldsListTableTools = () => {
    const { tableData, setTableData } = useActivityFieldList()

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
            <ActivityFieldListSearch onInputChange={handleInputChange} />
            <ActivityFieldTableFilter />
        </div>
    )
}

export default ActivityFieldsListTableTools
