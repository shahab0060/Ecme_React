
import useProfileList from '../hooks/useProfileList'
import ProfileListSearch from './ProfileListSearch'
import ProfileTableFilter from './ProfileListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const ProfilesListTableTools = () => {
    const { tableData, setTableData } = useProfileList()

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
            <ProfileListSearch onInputChange={handleInputChange} />
            <ProfileTableFilter />
        </div>
    )
}

export default ProfilesListTableTools
