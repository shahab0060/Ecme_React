
import useCustomerProfileList from '../hooks/useCustomerProfileList'
import CustomerProfileListSearch from './CustomerProfileListSearch'
import CustomerProfileTableFilter from './CustomerProfileListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const CustomerProfilesListTableTools = () => {
    const { tableData, setTableData } = useCustomerProfileList()

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
            <CustomerProfileListSearch onInputChange={handleInputChange} />
            <CustomerProfileTableFilter />
        </div>
    )
}

export default CustomerProfilesListTableTools
