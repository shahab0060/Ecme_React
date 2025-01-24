
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useCustomerIpList from '../hooks/useCustomerIpList'
import { CSVLink } from 'react-csv'

const CustomerIpListActionTools = () => {
    const navigate = useNavigate()

    const { customerIpList } = useCustomerIpList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="customerIpList.csv"
                data={customerIpList}
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
                onClick={() => navigate('/concepts/customerIps/customerIp-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default CustomerIpListActionTools

