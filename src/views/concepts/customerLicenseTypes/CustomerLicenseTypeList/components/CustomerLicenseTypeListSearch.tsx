
import { forwardRef } from 'react'
import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'

type CustomerLicenseTypeListSearchProps = {
    onInputChange: (value: string) => void
}

const CustomerLicenseTypeListSearch = forwardRef<
    HTMLInputElement,
    CustomerLicenseTypeListSearchProps
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

CustomerLicenseTypeListSearch.displayName = 'CustomerLicenseTypeListSearch'

export default CustomerLicenseTypeListSearch

