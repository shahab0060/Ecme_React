
import useCustomerFollowupList from '../hooks/useCustomerFollowupList'
import CustomerFollowupListSearch from './CustomerFollowupListSearch'
import CustomerFollowupTableFilter from './CustomerFollowupListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const CustomerFollowupsListTableTools = () => {
    const { tableData, setTableData } = useCustomerFollowupList()

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
            <CustomerFollowupListSearch onInputChange={handleInputChange} />
            <CustomerFollowupTableFilter />
        </div>
    )
}

export default CustomerFollowupsListTableTools
