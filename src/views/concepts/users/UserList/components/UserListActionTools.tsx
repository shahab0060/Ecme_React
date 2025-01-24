
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useUserList from '../hooks/useUserList'
import { CSVLink } from 'react-csv'

const UserListActionTools = () => {
    const navigate = useNavigate()

    const { userList } = useUserList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="userList.csv"
                data={userList}
            >
                <Button
                    icon={<TbCloudDownload className="text-xl" />}
                    className="w-full"
                >
                    دانلود کنید
                </Button>
            </CSVLink>
            <Button
                variant="solid"
                icon={<TbUserPlus className="text-xl" />}
                onClick={() => navigate('/concepts/users/user-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default UserListActionTools

