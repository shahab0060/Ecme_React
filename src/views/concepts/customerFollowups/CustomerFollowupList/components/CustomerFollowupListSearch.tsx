
import { forwardRef } from 'react'
import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'

type CustomerFollowupListSearchProps = {
    onInputChange: (value: string) => void
}

const CustomerFollowupListSearch = forwardRef<
    HTMLInputElement,
    CustomerFollowupListSearchProps
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

CustomerFollowupListSearch.displayName = 'CustomerFollowupListSearch'

export default CustomerFollowupListSearch

