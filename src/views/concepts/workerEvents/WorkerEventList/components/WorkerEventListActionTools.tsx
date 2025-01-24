
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useWorkerEventList from '../hooks/useWorkerEventList'
import { CSVLink } from 'react-csv'

const WorkerEventListActionTools = () => {
    const navigate = useNavigate()

    const { workerEventList } = useWorkerEventList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="workerEventList.csv"
                data={workerEventList}
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
                onClick={() => navigate('/concepts/workerEvents/workerEvent-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default WorkerEventListActionTools

