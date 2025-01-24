
import type { Control, FieldErrors } from 'react-hook-form'

export type ActivityFieldFields = {
    id?:number | string
    
parentId?: number | string



type?: string



name?: string


}

export type ActivityFieldFormSchema = ActivityFieldFields

export type FormSectionBaseProps = {
    control: Control<ActivityFieldFormSchema>
    errors: FieldErrors<ActivityFieldFormSchema>
}

