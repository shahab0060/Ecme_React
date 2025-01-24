
import type { Control, FieldErrors } from 'react-hook-form'

export type CustomerFields = {
    id?:number | string
    
customerTitleId?: number | string



displayName?: string



locationId?: number | string



phoneNumber?: string



jobStart?: number | string



jobEnd?: number | string



jobInterval?: number | string



activityFieldId?: number | string



firstName?: string



lastName?: string



legalName?: string


}

export type CustomerFormSchema = CustomerFields

export type FormSectionBaseProps = {
    control: Control<CustomerFormSchema>
    errors: FieldErrors<CustomerFormSchema>
}

