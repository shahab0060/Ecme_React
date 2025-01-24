
import useCustomerTitleList from '../hooks/useCustomerTitleList'
import CustomerTitleListSearch from './CustomerTitleListSearch'
import CustomerTitleTableFilter from './CustomerTitleListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const CustomerTitlesListTableTools = () => {
    const { tableData, setTableData } = useCustomerTitleList()

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
            <CustomerTitleListSearch onInputChange={handleInputChange} />
            <CustomerTitleTableFilter />
        </div>
    )
}

export default CustomerTitlesListTableTools
