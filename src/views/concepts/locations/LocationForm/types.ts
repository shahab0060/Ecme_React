
import type { Control, FieldErrors } from 'react-hook-form'

export type LocationFields = {
    id?:number | string
    
parentId?: number | string



type?: string



name?: string


}

export type LocationFormSchema = LocationFields

export type FormSectionBaseProps = {
    control: Control<LocationFormSchema>
    errors: FieldErrors<LocationFormSchema>
}

