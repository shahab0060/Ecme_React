
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useProfileDataList from '../hooks/useProfileDataList'
import { CSVLink } from 'react-csv'

const ProfileDataListActionTools = () => {
    const navigate = useNavigate()

    const { profileDataList } = useProfileDataList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="profileDataList.csv"
                data={profileDataList}
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
                onClick={() => navigate('/concepts/profileDatas/profileData-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default ProfileDataListActionTools

