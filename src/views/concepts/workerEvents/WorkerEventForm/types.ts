
import type { Control, FieldErrors } from 'react-hook-form'

export type WorkerEventFields = {
    id?:number | string
    
customerProfileId?: number | string



transferCount?: number | string



transferDateTime?: Date



isSucceed?: boolean


}

export type WorkerEventFormSchema = WorkerEventFields

export type FormSectionBaseProps = {
    control: Control<WorkerEventFormSchema>
    errors: FieldErrors<WorkerEventFormSchema>
}

