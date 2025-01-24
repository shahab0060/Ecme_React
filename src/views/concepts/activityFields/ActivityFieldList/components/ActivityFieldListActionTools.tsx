
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useActivityFieldList from '../hooks/useActivityFieldList'
import { CSVLink } from 'react-csv'

const ActivityFieldListActionTools = () => {
    const navigate = useNavigate()

    const { activityFieldList } = useActivityFieldList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="activityFieldList.csv"
                data={activityFieldList}
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
                onClick={() => navigate('/concepts/activityFields/activityField-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default ActivityFieldListActionTools

