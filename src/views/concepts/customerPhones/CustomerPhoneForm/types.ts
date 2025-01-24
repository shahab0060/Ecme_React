
import type { Control, FieldErrors } from 'react-hook-form'

export type CustomerPhoneFields = {
    id?:number | string
    
customerId?: number | string



phone?: string


}

export type CustomerPhoneFormSchema = CustomerPhoneFields

export type FormSectionBaseProps = {
    control: Control<CustomerPhoneFormSchema>
    errors: FieldErrors<CustomerPhoneFormSchema>
}

