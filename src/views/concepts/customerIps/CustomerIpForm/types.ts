
import type { Control, FieldErrors } from 'react-hook-form'

export type CustomerIpFields = {
    id?:number | string
    
customerId?: number | string



iP?: string


}

export type CustomerIpFormSchema = CustomerIpFields

export type FormSectionBaseProps = {
    control: Control<CustomerIpFormSchema>
    errors: FieldErrors<CustomerIpFormSchema>
}

