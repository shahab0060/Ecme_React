
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useCustomerTitleList from '../hooks/useCustomerTitleList'
import { CSVLink } from 'react-csv'

const CustomerTitleListActionTools = () => {
    const navigate = useNavigate()

    const { customerTitleList } = useCustomerTitleList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="customerTitleList.csv"
                data={customerTitleList}
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
                onClick={() => navigate('/concepts/customerTitles/customerTitle-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default CustomerTitleListActionTools

