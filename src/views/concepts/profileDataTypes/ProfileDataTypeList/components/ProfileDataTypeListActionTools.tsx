
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useProfileDataTypeList from '../hooks/useProfileDataTypeList'
import { CSVLink } from 'react-csv'

const ProfileDataTypeListActionTools = () => {
    const navigate = useNavigate()

    const { profileDataTypeList } = useProfileDataTypeList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="profileDataTypeList.csv"
                data={profileDataTypeList}
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
                onClick={() => navigate('/concepts/profileDataTypes/profileDataType-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default ProfileDataTypeListActionTools

