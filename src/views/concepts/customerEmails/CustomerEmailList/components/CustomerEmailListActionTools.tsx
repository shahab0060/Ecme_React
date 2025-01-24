
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useCustomerEmailList from '../hooks/useCustomerEmailList'
import { CSVLink } from 'react-csv'

const CustomerEmailListActionTools = () => {
    const navigate = useNavigate()

    const { customerEmailList } = useCustomerEmailList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="customerEmailList.csv"
                data={customerEmailList}
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
                onClick={() => navigate('/concepts/customerEmails/customerEmail-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default CustomerEmailListActionTools

