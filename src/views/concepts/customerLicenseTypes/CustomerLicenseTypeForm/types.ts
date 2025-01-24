
import type { Control, FieldErrors } from 'react-hook-form'

export type CustomerLicenseTypeFields = {
    id?:number | string
    
name?: string


}

export type CustomerLicenseTypeFormSchema = CustomerLicenseTypeFields

export type FormSectionBaseProps = {
    control: Control<CustomerLicenseTypeFormSchema>
    errors: FieldErrors<CustomerLicenseTypeFormSchema>
}

