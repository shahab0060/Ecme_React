
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useCustomerLicenseReasonTypeList from '../hooks/useCustomerLicenseReasonTypeList'
import { CSVLink } from 'react-csv'

const CustomerLicenseReasonTypeListActionTools = () => {
    const navigate = useNavigate()

    const { customerLicenseReasonTypeList } = useCustomerLicenseReasonTypeList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="customerLicenseReasonTypeList.csv"
                data={customerLicenseReasonTypeList}
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
                onClick={() => navigate('/concepts/customerLicenseReasonTypes/customerLicenseReasonType-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default CustomerLicenseReasonTypeListActionTools

