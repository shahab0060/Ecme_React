
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useBrandList from '../hooks/useBrandList'
import { CSVLink } from 'react-csv'

const BrandListActionTools = () => {
    const navigate = useNavigate()

    const { brandList } = useBrandList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="brandList.csv"
                data={brandList}
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
                onClick={() => navigate('/concepts/brands/brand-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default BrandListActionTools

