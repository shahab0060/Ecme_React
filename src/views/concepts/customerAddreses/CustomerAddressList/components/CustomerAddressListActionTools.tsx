
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useCustomerAddressList from '../hooks/useCustomerAddressList'
import { CSVLink } from 'react-csv'

const CustomerAddressListActionTools = () => {
    const navigate = useNavigate()

    const { customerAddressList } = useCustomerAddressList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="customerAddressList.csv"
                data={customerAddressList}
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
                onClick={() => navigate('/concepts/customerAddreses/customerAddress-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default CustomerAddressListActionTools

