
import useCustomerLicenseTypeList from '../hooks/useCustomerLicenseTypeList'
import CustomerLicenseTypeListSearch from './CustomerLicenseTypeListSearch'
import CustomerLicenseTypeTableFilter from './CustomerLicenseTypeListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const CustomerLicenseTypesListTableTools = () => {
    const { tableData, setTableData } = useCustomerLicenseTypeList()

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
            <CustomerLicenseTypeListSearch onInputChange={handleInputChange} />
            <CustomerLicenseTypeTableFilter />
        </div>
    )
}

export default CustomerLicenseTypesListTableTools
