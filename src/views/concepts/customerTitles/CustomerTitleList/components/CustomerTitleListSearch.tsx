
import { forwardRef } from 'react'
import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'

type CustomerTitleListSearchProps = {
    onInputChange: (value: string) => void
}

const CustomerTitleListSearch = forwardRef<
    HTMLInputElement,
    CustomerTitleListSearchProps
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

CustomerTitleListSearch.displayName = 'CustomerTitleListSearch'

export default CustomerTitleListSearch

