
import useCustomerLicenseList from '../hooks/useCustomerLicenseList'
import CustomerLicenseListSearch from './CustomerLicenseListSearch'
import CustomerLicenseTableFilter from './CustomerLicenseListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const CustomerLicensesListTableTools = () => {
    const { tableData, setTableData } = useCustomerLicenseList()

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
            <CustomerLicenseListSearch onInputChange={handleInputChange} />
            <CustomerLicenseTableFilter />
        </div>
    )
}

export default CustomerLicensesListTableTools
