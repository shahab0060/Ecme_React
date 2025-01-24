
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useCustomerLicenseList from '../hooks/useCustomerLicenseList'
import { CSVLink } from 'react-csv'

const CustomerLicenseListActionTools = () => {
    const navigate = useNavigate()

    const { customerLicenseList } = useCustomerLicenseList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="customerLicenseList.csv"
                data={customerLicenseList}
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
                onClick={() => navigate('/concepts/customerLicenses/customerLicense-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default CustomerLicenseListActionTools

