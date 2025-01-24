
import useCustomerIpList from '../hooks/useCustomerIpList'
import CustomerIpListSearch from './CustomerIpListSearch'
import CustomerIpTableFilter from './CustomerIpListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const CustomerIpsListTableTools = () => {
    const { tableData, setTableData } = useCustomerIpList()

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
            <CustomerIpListSearch onInputChange={handleInputChange} />
            <CustomerIpTableFilter />
        </div>
    )
}

export default CustomerIpsListTableTools
