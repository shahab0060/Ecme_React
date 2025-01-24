
import type { Control, FieldErrors } from 'react-hook-form'

export type ProductFields = {
    id?:number | string
    
name?: string


}

export type ProductFormSchema = ProductFields

export type FormSectionBaseProps = {
    control: Control<ProductFormSchema>
    errors: FieldErrors<ProductFormSchema>
}

