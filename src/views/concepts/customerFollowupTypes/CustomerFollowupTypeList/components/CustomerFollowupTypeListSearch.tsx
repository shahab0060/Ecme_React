
import { forwardRef } from 'react'
import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'

type CustomerFollowupTypeListSearchProps = {
    onInputChange: (value: string) => void
}

const CustomerFollowupTypeListSearch = forwardRef<
    HTMLInputElement,
    CustomerFollowupTypeListSearchProps
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

CustomerFollowupTypeListSearch.displayName = 'CustomerFollowupTypeListSearch'

export default CustomerFollowupTypeListSearch

