
import { useEffect } from 'react'
import { Form } from '@/components/ui/Form'
import Container from '@/components/shared/Container'
import BottomStickyBar from '@/components/template/BottomStickyBar'
import InputsSection from './InputsSection'
import isEmpty from 'lodash/isEmpty'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import type { ZodType } from 'zod'
import type { CommonProps } from '@/@types/common'
import type { ProfileDataFormSchema } from './types'

type ProfileDataFormProps = {
    onFormSubmit: (values: ProfileDataFormSchema) => void
    defaultValues?: ProfileDataFormSchema
    newProfileData?: boolean
} & CommonProps

const validationSchema: ZodType<ProfileDataFormSchema> = z.object({
    id: z.number(),
    parentId: z
        .union([z.string(), z.number()]),
profileDataTypeId: z
        .union([z.string(), z.number()]),
profileId: z
        .union([z.string(), z.number().min(1, { message: 'لطفاً پروفایل را وارد کنید' })]),
name: z
        .string().min(1, { message: 'لطفاً نام را وارد کنید' }).max(450,{message:'نام نمیتواند بیشتر از 450 کاراکتر باشد'}),
fetchCode: z
        .string().min(1, { message: 'لطفاً کد گرفتن اطلاعات را وارد کنید' }),
})


const ProfileDataForm = (props: ProfileDataFormProps) => {
    const {
        onFormSubmit,
        defaultValues = {},
        newProfileData = false,
        children,
    } = props

    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<ProfileDataFormSchema>({
        defaultValues: {
          
            ...defaultValues,
        },
        resolver: zodResolver(validationSchema),
    })

    useEffect(() => {
        if (!isEmpty(defaultValues)) {
            reset(defaultValues)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(defaultValues)])

    const onSubmit = (values: ProfileDataFormSchema) => {
        onFormSubmit?.(values)
    }

    return (
        <Form
            className="flex w-full h-full"
            containerClassName="flex flex-col w-full justify-between"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Container>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="gap-4 flex flex-col flex-auto">
                        <InputsSection control={control} errors={errors} />
                        
                    </div>
                </div>
            </Container>
            <BottomStickyBar>{children}</BottomStickyBar>
        </Form>
    )
}

export default ProfileDataForm

