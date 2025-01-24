
import type { Control, FieldErrors } from 'react-hook-form'

export type CustomerFollowupFields = {
    id?:number | string
    
customerFollowupTypeId?: number | string



customerId?: number | string



userId?: number | string



result?: string



referredUserId?: number | string



referredDescription?: string


}

export type CustomerFollowupFormSchema = CustomerFollowupFields

export type FormSectionBaseProps = {
    control: Control<CustomerFollowupFormSchema>
    errors: FieldErrors<CustomerFollowupFormSchema>
}

