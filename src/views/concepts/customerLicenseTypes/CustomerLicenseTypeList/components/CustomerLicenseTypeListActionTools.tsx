
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useCustomerLicenseTypeList from '../hooks/useCustomerLicenseTypeList'
import { CSVLink } from 'react-csv'

const CustomerLicenseTypeListActionTools = () => {
    const navigate = useNavigate()

    const { customerLicenseTypeList } = useCustomerLicenseTypeList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="customerLicenseTypeList.csv"
                data={customerLicenseTypeList}
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
                onClick={() => navigate('/concepts/customerLicenseTypes/customerLicenseType-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default CustomerLicenseTypeListActionTools

