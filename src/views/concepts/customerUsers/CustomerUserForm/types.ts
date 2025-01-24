
import type { Control, FieldErrors } from 'react-hook-form'

export type CustomerUserFields = {
    id?:number | string
    
customerId?: number | string



userId?: number | string


}

export type CustomerUserFormSchema = CustomerUserFields

export type FormSectionBaseProps = {
    control: Control<CustomerUserFormSchema>
    errors: FieldErrors<CustomerUserFormSchema>
}

