
import type { Control, FieldErrors } from 'react-hook-form'

export type CustomerProfileFields = {
    id?:number | string
    
customerId?: number | string



profileId?: number | string



dbServer?: string



dbUserId?: string



dbPassword?: string



dbName?: string



dbOptions?: string


}

export type CustomerProfileFormSchema = CustomerProfileFields

export type FormSectionBaseProps = {
    control: Control<CustomerProfileFormSchema>
    errors: FieldErrors<CustomerProfileFormSchema>
}

