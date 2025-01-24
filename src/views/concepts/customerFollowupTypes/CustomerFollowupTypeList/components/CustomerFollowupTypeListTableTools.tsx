
import useCustomerFollowupTypeList from '../hooks/useCustomerFollowupTypeList'
import CustomerFollowupTypeListSearch from './CustomerFollowupTypeListSearch'
import CustomerFollowupTypeTableFilter from './CustomerFollowupTypeListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const CustomerFollowupTypesListTableTools = () => {
    const { tableData, setTableData } = useCustomerFollowupTypeList()

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
            <CustomerFollowupTypeListSearch onInputChange={handleInputChange} />
            <CustomerFollowupTypeTableFilter />
        </div>
    )
}

export default CustomerFollowupTypesListTableTools
