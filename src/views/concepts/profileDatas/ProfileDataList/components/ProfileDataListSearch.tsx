
import { forwardRef } from 'react'
import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'

type ProfileDataListSearchProps = {
    onInputChange: (value: string) => void
}

const ProfileDataListSearch = forwardRef<
    HTMLInputElement,
    ProfileDataListSearchProps
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

ProfileDataListSearch.displayName = 'ProfileDataListSearch'

export default ProfileDataListSearch

