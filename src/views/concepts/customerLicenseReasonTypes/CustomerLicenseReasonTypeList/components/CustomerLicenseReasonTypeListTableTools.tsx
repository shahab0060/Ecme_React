
import useCustomerLicenseReasonTypeList from '../hooks/useCustomerLicenseReasonTypeList'
import CustomerLicenseReasonTypeListSearch from './CustomerLicenseReasonTypeListSearch'
import CustomerLicenseReasonTypeTableFilter from './CustomerLicenseReasonTypeListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const CustomerLicenseReasonTypesListTableTools = () => {
    const { tableData, setTableData } = useCustomerLicenseReasonTypeList()

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
            <CustomerLicenseReasonTypeListSearch onInputChange={handleInputChange} />
            <CustomerLicenseReasonTypeTableFilter />
        </div>
    )
}

export default CustomerLicenseReasonTypesListTableTools
