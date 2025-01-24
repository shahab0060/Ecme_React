
import { forwardRef } from 'react'
import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'

type ProfileListSearchProps = {
    onInputChange: (value: string) => void
}

const ProfileListSearch = forwardRef<
    HTMLInputElement,
    ProfileListSearchProps
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

ProfileListSearch.displayName = 'ProfileListSearch'

export default ProfileListSearch

