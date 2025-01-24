
import type { Control, FieldErrors } from 'react-hook-form'

export type ProfileDataFields = {
    id?:number | string
    
parentId?: number | string



profileDataTypeId?: number | string



profileId?: number | string



name?: string



fetchCode?: string


}

export type ProfileDataFormSchema = ProfileDataFields

export type FormSectionBaseProps = {
    control: Control<ProfileDataFormSchema>
    errors: FieldErrors<ProfileDataFormSchema>
}

