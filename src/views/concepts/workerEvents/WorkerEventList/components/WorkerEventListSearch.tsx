
import { forwardRef } from 'react'
import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'

type WorkerEventListSearchProps = {
    onInputChange: (value: string) => void
}

const WorkerEventListSearch = forwardRef<
    HTMLInputElement,
    WorkerEventListSearchProps
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

WorkerEventListSearch.displayName = 'WorkerEventListSearch'

export default WorkerEventListSearch

