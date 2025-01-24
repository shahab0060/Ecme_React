
import useCustomerAddressList from '../hooks/useCustomerAddressList'
import CustomerAddressListSearch from './CustomerAddressListSearch'
import CustomerAddressTableFilter from './CustomerAddressListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const CustomerAddresesListTableTools = () => {
    const { tableData, setTableData } = useCustomerAddressList()

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
            <CustomerAddressListSearch onInputChange={handleInputChange} />
            <CustomerAddressTableFilter />
        </div>
    )
}

export default CustomerAddresesListTableTools
