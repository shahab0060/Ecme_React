
import useUserList from '../hooks/useUserList'
import UserListSearch from './UserListSearch'
import UserTableFilter from './UserListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const UsersListTableTools = () => {
    const { tableData, setTableData } = useUserList()

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
            <UserListSearch onInputChange={handleInputChange} />
            <UserTableFilter />
        </div>
    )
}

export default UsersListTableTools
