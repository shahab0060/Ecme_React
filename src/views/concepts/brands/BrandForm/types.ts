
import type { Control, FieldErrors } from 'react-hook-form'

export type BrandFields = {
    id?:number | string
    
name?: string


}

export type BrandFormSchema = BrandFields

export type FormSectionBaseProps = {
    control: Control<BrandFormSchema>
    errors: FieldErrors<BrandFormSchema>
}

