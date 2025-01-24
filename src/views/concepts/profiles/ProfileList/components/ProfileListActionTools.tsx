
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useProfileList from '../hooks/useProfileList'
import { CSVLink } from 'react-csv'

const ProfileListActionTools = () => {
    const navigate = useNavigate()

    const { profileList } = useProfileList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="profileList.csv"
                data={profileList}
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
                onClick={() => navigate('/concepts/profiles/profile-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default ProfileListActionTools

