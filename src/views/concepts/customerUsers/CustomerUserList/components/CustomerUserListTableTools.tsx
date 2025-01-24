
import useCustomerUserList from '../hooks/useCustomerUserList'
import CustomerUserListSearch from './CustomerUserListSearch'
import CustomerUserTableFilter from './CustomerUserListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const CustomerUsersListTableTools = () => {
    const { tableData, setTableData } = useCustomerUserList()

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
            <CustomerUserListSearch onInputChange={handleInputChange} />
            <CustomerUserTableFilter />
        </div>
    )
}

export default CustomerUsersListTableTools
