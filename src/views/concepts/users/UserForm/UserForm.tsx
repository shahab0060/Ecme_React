
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
import type { UserFormSchema } from './types'

type UserFormProps = {
    onFormSubmit: (values: UserFormSchema) => void
    defaultValues?: UserFormSchema
    newUser?: boolean
} & CommonProps

const validationSchema: ZodType<UserFormSchema> = z.object({
    id: z.number(),
    phoneNumber: z
        .string().min(11, { message: 'لطفاً شماره تلفن را وارد کنید' }).max(11,{message:'شماره تلفن نمیتواند بیشتر از 11 کاراکتر باشد'}),
firstName: z
        .string().min(11, { message: 'لطفاً نام را وارد کنید' }).max(250,{message:'نام نمیتواند بیشتر از 250 کاراکتر باشد'}),
lastName: z
        .string().min(11, { message: 'لطفاً نام خانوادگی را وارد کنید' }).max(250,{message:'نام خانوادگی نمیتواند بیشتر از 250 کاراکتر باشد'}),
isSuperAdmin: z
        .string(),
phoneNumberActivationCode: z
        .string().min(4, { message: 'لطفاً کد تایید شماره تلفن را وارد کنید' }).max(4,{message:'کد تایید شماره تلفن نمیتواند بیشتر از 4 کاراکتر باشد'}),
phoneNumberActivationCodeExpirationTime: z
        .string(),
password: z
        .string().min(1, { message: 'لطفاً رمز عبور را وارد کنید' }),
})


const UserForm = (props: UserFormProps) => {
    const {
        onFormSubmit,
        defaultValues = {},
        newUser = false,
        children,
    } = props

    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<UserFormSchema>({
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

    const onSubmit = (values: UserFormSchema) => {
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

export default UserForm

