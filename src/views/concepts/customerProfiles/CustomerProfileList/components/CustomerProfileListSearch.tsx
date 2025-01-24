
import { forwardRef } from 'react'
import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'

type CustomerProfileListSearchProps = {
    onInputChange: (value: string) => void
}

const CustomerProfileListSearch = forwardRef<
    HTMLInputElement,
    CustomerProfileListSearchProps
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

CustomerProfileListSearch.displayName = 'CustomerProfileListSearch'

export default CustomerProfileListSearch

