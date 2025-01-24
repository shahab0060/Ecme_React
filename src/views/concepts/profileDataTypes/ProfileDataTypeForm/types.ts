
import type { Control, FieldErrors } from 'react-hook-form'

export type ProfileDataTypeFields = {
    id?:number | string
    
name?: string


}

export type ProfileDataTypeFormSchema = ProfileDataTypeFields

export type FormSectionBaseProps = {
    control: Control<ProfileDataTypeFormSchema>
    errors: FieldErrors<ProfileDataTypeFormSchema>
}

