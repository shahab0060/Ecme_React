import type { Control, FieldErrors } from 'react-hook-form'

export type OverviewFields = {
    firstName: string
    lastName: string
    displayName: string
    title: string
    legalName: string
    locationId:number | string
    phoneNumber:string
}

export type JobFields = {
    jobStart: number | string
    jobEnd: number | string
    jobInterval: number | string
    activityFieldId: number | string
}

export type ProfileImageFields = {
    avatar: string
}

export type TagsFields = {
    tags: Array<{ value: string; label: string }>
}


export type CustomerFormSchema = OverviewFields & 
    JobFields&
    ProfileImageFields &
    TagsFields 

export type FormSectionBaseProps = {
    control: Control<CustomerFormSchema>
    errors: FieldErrors<CustomerFormSchema>
}
