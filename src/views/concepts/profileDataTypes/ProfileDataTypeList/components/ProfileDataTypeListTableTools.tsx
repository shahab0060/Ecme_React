
import useProfileDataTypeList from '../hooks/useProfileDataTypeList'
import ProfileDataTypeListSearch from './ProfileDataTypeListSearch'
import ProfileDataTypeTableFilter from './ProfileDataTypeListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const ProfileDataTypesListTableTools = () => {
    const { tableData, setTableData } = useProfileDataTypeList()

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
            <ProfileDataTypeListSearch onInputChange={handleInputChange} />
            <ProfileDataTypeTableFilter />
        </div>
    )
}

export default ProfileDataTypesListTableTools
