
import { forwardRef } from 'react'
import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'

type CustomerLicenseListSearchProps = {
    onInputChange: (value: string) => void
}

const CustomerLicenseListSearch = forwardRef<
    HTMLInputElement,
    CustomerLicenseListSearchProps
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

CustomerLicenseListSearch.displayName = 'CustomerLicenseListSearch'

export default CustomerLicenseListSearch

