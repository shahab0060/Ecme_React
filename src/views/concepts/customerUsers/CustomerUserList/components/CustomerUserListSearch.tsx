
import { forwardRef } from 'react'
import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'

type CustomerUserListSearchProps = {
    onInputChange: (value: string) => void
}

const CustomerUserListSearch = forwardRef<
    HTMLInputElement,
    CustomerUserListSearchProps
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

CustomerUserListSearch.displayName = 'CustomerUserListSearch'

export default CustomerUserListSearch

