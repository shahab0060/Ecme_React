
import type { Control, FieldErrors } from 'react-hook-form'

export type CustomerAddressFields = {
    id?:number | string
    
customerId?: number | string



address?: string


}

export type CustomerAddressFormSchema = CustomerAddressFields

export type FormSectionBaseProps = {
    control: Control<CustomerAddressFormSchema>
    errors: FieldErrors<CustomerAddressFormSchema>
}

