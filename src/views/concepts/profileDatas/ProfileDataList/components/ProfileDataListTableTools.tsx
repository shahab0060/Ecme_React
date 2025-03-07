
import useProfileDataList from '../hooks/useProfileDataList'
import ProfileDataListSearch from './ProfileDataListSearch'
import ProfileDataTableFilter from './ProfileDataListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const ProfileDatasListTableTools = () => {
    const { tableData, setTableData } = useProfileDataList()

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
            <ProfileDataListSearch onInputChange={handleInputChange} />
            <ProfileDataTableFilter />
        </div>
    )
}

export default ProfileDatasListTableTools
