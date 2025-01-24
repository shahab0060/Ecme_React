
import type { Control, FieldErrors } from 'react-hook-form'

export type UserFields = {
    id?:number | string
    
phoneNumber?: string



firstName?: string



lastName?: string



isSuperAdmin?: boolean



phoneNumberActivationCode?: string



phoneNumberActivationCodeExpirationTime?: Date



password?: string


}

export type UserFormSchema = UserFields

export type FormSectionBaseProps = {
    control: Control<UserFormSchema>
    errors: FieldErrors<UserFormSchema>
}

