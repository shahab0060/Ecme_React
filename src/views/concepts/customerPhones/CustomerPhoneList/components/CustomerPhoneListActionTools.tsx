
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useCustomerPhoneList from '../hooks/useCustomerPhoneList'
import { CSVLink } from 'react-csv'

const CustomerPhoneListActionTools = () => {
    const navigate = useNavigate()

    const { customerPhoneList } = useCustomerPhoneList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="customerPhoneList.csv"
                data={customerPhoneList}
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
                onClick={() => navigate('/concepts/customerPhones/customerPhone-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default CustomerPhoneListActionTools

