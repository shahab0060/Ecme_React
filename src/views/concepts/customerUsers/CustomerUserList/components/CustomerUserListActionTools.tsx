
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useCustomerUserList from '../hooks/useCustomerUserList'
import { CSVLink } from 'react-csv'

const CustomerUserListActionTools = () => {
    const navigate = useNavigate()

    const { customerUserList } = useCustomerUserList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="customerUserList.csv"
                data={customerUserList}
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
                onClick={() => navigate('/concepts/customerUsers/customerUser-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default CustomerUserListActionTools

