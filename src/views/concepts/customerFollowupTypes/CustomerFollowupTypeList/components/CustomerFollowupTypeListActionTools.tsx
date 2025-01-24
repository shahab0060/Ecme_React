
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useCustomerFollowupTypeList from '../hooks/useCustomerFollowupTypeList'
import { CSVLink } from 'react-csv'

const CustomerFollowupTypeListActionTools = () => {
    const navigate = useNavigate()

    const { customerFollowupTypeList } = useCustomerFollowupTypeList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="customerFollowupTypeList.csv"
                data={customerFollowupTypeList}
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
                onClick={() => navigate('/concepts/customerFollowupTypes/customerFollowupType-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default CustomerFollowupTypeListActionTools

