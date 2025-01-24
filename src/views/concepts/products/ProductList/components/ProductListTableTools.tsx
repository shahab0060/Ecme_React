
import useProductList from '../hooks/useProductList'
import ProductListSearch from './ProductListSearch'
import ProductTableFilter from './ProductListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const ProductsListTableTools = () => {
    const { tableData, setTableData } = useProductList()

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
            <ProductListSearch onInputChange={handleInputChange} />
            <ProductTableFilter />
        </div>
    )
}

export default ProductsListTableTools
