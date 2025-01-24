
import { forwardRef } from 'react'
import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'

type CustomerLicenseReasonTypeListSearchProps = {
    onInputChange: (value: string) => void
}

const CustomerLicenseReasonTypeListSearch = forwardRef<
    HTMLInputElement,
    CustomerLicenseReasonTypeListSearchProps
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

CustomerLicenseReasonTypeListSearch.displayName = 'CustomerLicenseReasonTypeListSearch'

export default CustomerLicenseReasonTypeListSearch

