
import { forwardRef } from 'react'
import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'

type ActivityFieldListSearchProps = {
    onInputChange: (value: string) => void
}

const ActivityFieldListSearch = forwardRef<
    HTMLInputElement,
    ActivityFieldListSearchProps
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

ActivityFieldListSearch.displayName = 'ActivityFieldListSearch'

export default ActivityFieldListSearch

