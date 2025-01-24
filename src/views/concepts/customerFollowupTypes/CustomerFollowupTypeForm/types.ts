
import type { Control, FieldErrors } from 'react-hook-form'

export type CustomerFollowupTypeFields = {
    id?:number | string
    
name?: string


}

export type CustomerFollowupTypeFormSchema = CustomerFollowupTypeFields

export type FormSectionBaseProps = {
    control: Control<CustomerFollowupTypeFormSchema>
    errors: FieldErrors<CustomerFollowupTypeFormSchema>
}

