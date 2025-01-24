
import { forwardRef } from 'react'
import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'

type ProfileDataTypeListSearchProps = {
    onInputChange: (value: string) => void
}

const ProfileDataTypeListSearch = forwardRef<
    HTMLInputElement,
    ProfileDataTypeListSearchProps
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

ProfileDataTypeListSearch.displayName = 'ProfileDataTypeListSearch'

export default ProfileDataTypeListSearch

