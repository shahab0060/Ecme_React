
import type { Control, FieldErrors } from 'react-hook-form'

export type CustomerEmailFields = {
    id?:number | string
    
customerId?: number | string



email?: string


}

export type CustomerEmailFormSchema = CustomerEmailFields

export type FormSectionBaseProps = {
    control: Control<CustomerEmailFormSchema>
    errors: FieldErrors<CustomerEmailFormSchema>
}

