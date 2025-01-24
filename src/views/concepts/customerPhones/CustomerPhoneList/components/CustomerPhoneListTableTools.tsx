
import useCustomerPhoneList from '../hooks/useCustomerPhoneList'
import CustomerPhoneListSearch from './CustomerPhoneListSearch'
import CustomerPhoneTableFilter from './CustomerPhoneListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const CustomerPhonesListTableTools = () => {
    const { tableData, setTableData } = useCustomerPhoneList()

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
            <CustomerPhoneListSearch onInputChange={handleInputChange} />
            <CustomerPhoneTableFilter />
        </div>
    )
}

export default CustomerPhonesListTableTools
