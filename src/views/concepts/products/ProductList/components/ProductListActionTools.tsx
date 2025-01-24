
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useProductList from '../hooks/useProductList'
import { CSVLink } from 'react-csv'

const ProductListActionTools = () => {
    const navigate = useNavigate()

    const { productList } = useProductList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="productList.csv"
                data={productList}
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
                onClick={() => navigate('/concepts/products/product-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default ProductListActionTools

