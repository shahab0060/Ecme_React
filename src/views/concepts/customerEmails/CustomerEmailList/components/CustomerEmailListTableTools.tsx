
import useCustomerEmailList from '../hooks/useCustomerEmailList'
import CustomerEmailListSearch from './CustomerEmailListSearch'
import CustomerEmailTableFilter from './CustomerEmailListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const CustomerEmailsListTableTools = () => {
    const { tableData, setTableData } = useCustomerEmailList()

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
            <CustomerEmailListSearch onInputChange={handleInputChange} />
            <CustomerEmailTableFilter />
        </div>
    )
}

export default CustomerEmailsListTableTools
