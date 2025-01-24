
import { forwardRef } from 'react'
import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'

type CustomerPhoneListSearchProps = {
    onInputChange: (value: string) => void
}

const CustomerPhoneListSearch = forwardRef<
    HTMLInputElement,
    CustomerPhoneListSearchProps
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

CustomerPhoneListSearch.displayName = 'CustomerPhoneListSearch'

export default CustomerPhoneListSearch

