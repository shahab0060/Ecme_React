
import type { Control, FieldErrors } from 'react-hook-form'

export type ProfileFields = {
    id?:number | string
    
name?: string



branch?: string



brandId?: number | string



dbName?: string



productId?: number | string


}

export type ProfileFormSchema = ProfileFields

export type FormSectionBaseProps = {
    control: Control<ProfileFormSchema>
    errors: FieldErrors<ProfileFormSchema>
}

