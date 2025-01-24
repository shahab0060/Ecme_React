
import useLocationList from '../hooks/useLocationList'
import LocationListSearch from './LocationListSearch'
import LocationTableFilter from './LocationListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const LocationsListTableTools = () => {
    const { tableData, setTableData } = useLocationList()

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
            <LocationListSearch onInputChange={handleInputChange} />
            <LocationTableFilter />
        </div>
    )
}

export default LocationsListTableTools
