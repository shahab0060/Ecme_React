
import { forwardRef } from 'react'
import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'

type ProductListSearchProps = {
    onInputChange: (value: string) => void
}

const ProductListSearch = forwardRef<
    HTMLInputElement,
    ProductListSearchProps
>((props, ref) => {
    const { onInputChange } = props

    return (
        <DebouceInput
            ref={ref}
            placeholder="جستجوی سریع..."
            suffix={<TbSearch className="text-lg" />}
            onChange={(e) => onInputChange(e.target.value)}
        />
    )
})

ProductListSearch.displayName = 'ProductListSearch'

export default ProductListSearch

