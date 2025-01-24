
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
import type { CustomerProfileFormSchema } from './types'

type CustomerProfileFormProps = {
    onFormSubmit: (values: CustomerProfileFormSchema) => void
    defaultValues?: CustomerProfileFormSchema
    newCustomerProfile?: boolean
} & CommonProps

const validationSchema: ZodType<CustomerProfileFormSchema> = z.object({
    id: z.number(),
    customerId: z
        .union([z.string(), z.number().min(1, { message: 'لطفاً مشتری را وارد کنید' })]),
profileId: z
        .union([z.string(), z.number().min(1, { message: 'لطفاً پروفایل را وارد کنید' })]),
dbServer: z
        .string().min(1, { message: 'لطفاً سرور بانک اطلاعاتی را وارد کنید' }).max(450,{message:'سرور بانک اطلاعاتی نمیتواند بیشتر از 450 کاراکتر باشد'}),
dbUserId: z
        .string().max(250,{message:'نام کاربری بانک اطلاعاتی نمیتواند بیشتر از 250 کاراکتر باشد'}),
dbPassword: z
        .string(),
dbName: z
        .string().min(1, { message: 'لطفاً نام بانک اطلاعاتی را وارد کنید' }).max(450,{message:'نام بانک اطلاعاتی نمیتواند بیشتر از 450 کاراکتر باشد'}),
dbOptions: z
        .string().max(500,{message:'گزینه های بانک اطلاعاتی نمیتواند بیشتر از 500 کاراکتر باشد'}),
})


const CustomerProfileForm = (props: CustomerProfileFormProps) => {
    const {
        onFormSubmit,
        defaultValues = {},
        newCustomerProfile = false,
        children,
    } = props

    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<CustomerProfileFormSchema>({
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

    const onSubmit = (values: CustomerProfileFormSchema) => {
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

export default CustomerProfileForm

