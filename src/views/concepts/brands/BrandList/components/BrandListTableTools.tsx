
import useBrandList from '../hooks/useBrandList'
import BrandListSearch from './BrandListSearch'
import BrandTableFilter from './BrandListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const BrandsListTableTools = () => {
    const { tableData, setTableData } = useBrandList()

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
            <BrandListSearch onInputChange={handleInputChange} />
            <BrandTableFilter />
        </div>
    )
}

export default BrandsListTableTools
