
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useCustomerProfileList from '../hooks/useCustomerProfileList'
import { CSVLink } from 'react-csv'

const CustomerProfileListActionTools = () => {
    const navigate = useNavigate()

    const { customerProfileList } = useCustomerProfileList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="customerProfileList.csv"
                data={customerProfileList}
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
                onClick={() => navigate('/concepts/customerProfiles/customerProfile-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default CustomerProfileListActionTools

