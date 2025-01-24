
import type { Control, FieldErrors } from 'react-hook-form'

export type CustomerLicenseReasonTypeFields = {
    id?:number | string
    
name?: string


}

export type CustomerLicenseReasonTypeFormSchema = CustomerLicenseReasonTypeFields

export type FormSectionBaseProps = {
    control: Control<CustomerLicenseReasonTypeFormSchema>
    errors: FieldErrors<CustomerLicenseReasonTypeFormSchema>
}

