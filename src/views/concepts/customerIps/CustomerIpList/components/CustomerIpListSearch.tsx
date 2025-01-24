
import { forwardRef } from 'react'
import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'

type CustomerIpListSearchProps = {
    onInputChange: (value: string) => void
}

const CustomerIpListSearch = forwardRef<
    HTMLInputElement,
    CustomerIpListSearchProps
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

CustomerIpListSearch.displayName = 'CustomerIpListSearch'

export default CustomerIpListSearch

