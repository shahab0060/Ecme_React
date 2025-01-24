
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
import type { ProfileFormSchema } from './types'

type ProfileFormProps = {
    onFormSubmit: (values: ProfileFormSchema) => void
    defaultValues?: ProfileFormSchema
    newProfile?: boolean
} & CommonProps

const validationSchema: ZodType<ProfileFormSchema> = z.object({
    id: z.number(),
    name: z
        .string().min(1, { message: 'لطفاً نام را وارد کنید' }).max(350,{message:'نام نمیتواند بیشتر از 350 کاراکتر باشد'}),
branch: z
        .string().min(1, { message: 'لطفاً برنچ را وارد کنید' }).max(250,{message:'برنچ نمیتواند بیشتر از 250 کاراکتر باشد'}),
brandId: z
        .union([z.string(), z.number().min(1, { message: 'لطفاً برند را وارد کنید' })]),
dbName: z
        .string().max(350,{message:'نام بانک اطلاعاتی نمیتواند بیشتر از 350 کاراکتر باشد'}),
productId: z
        .union([z.string(), z.number().min(1, { message: 'لطفاً محصول را وارد کنید' })]),
})


const ProfileForm = (props: ProfileFormProps) => {
    const {
        onFormSubmit,
        defaultValues = {},
        newProfile = false,
        children,
    } = props

    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<ProfileFormSchema>({
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

    const onSubmit = (values: ProfileFormSchema) => {
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

export default ProfileForm

