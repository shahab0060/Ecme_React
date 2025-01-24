
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useCustomerFollowupList from '../hooks/useCustomerFollowupList'
import { CSVLink } from 'react-csv'

const CustomerFollowupListActionTools = () => {
    const navigate = useNavigate()

    const { customerFollowupList } = useCustomerFollowupList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="customerFollowupList.csv"
                data={customerFollowupList}
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
                onClick={() => navigate('/concepts/customerFollowups/customerFollowup-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default CustomerFollowupListActionTools

