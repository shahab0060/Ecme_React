
import type { Control, FieldErrors } from 'react-hook-form'

export type CustomerLicenseFields = {
    id?:number | string
    
customerId?: number | string



customerLicenseTypeId?: number | string



expirationDate?: Date



description?: string



customerLicenseReasonTypeId?: number | string


}

export type CustomerLicenseFormSchema = CustomerLicenseFields

export type FormSectionBaseProps = {
    control: Control<CustomerLicenseFormSchema>
    errors: FieldErrors<CustomerLicenseFormSchema>
}

