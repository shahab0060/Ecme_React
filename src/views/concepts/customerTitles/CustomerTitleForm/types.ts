
import type { Control, FieldErrors } from 'react-hook-form'

export type CustomerTitleFields = {
    id?:number | string
    
title?: string


}

export type CustomerTitleFormSchema = CustomerTitleFields

export type FormSectionBaseProps = {
    control: Control<CustomerTitleFormSchema>
    errors: FieldErrors<CustomerTitleFormSchema>
}

