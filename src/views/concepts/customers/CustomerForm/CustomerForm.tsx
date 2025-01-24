
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
import type { CustomerFormSchema } from './types'

type CustomerFormProps = {
    onFormSubmit: (values: CustomerFormSchema) => void
    defaultValues?: CustomerFormSchema
    newCustomer?: boolean
} & CommonProps

const validationSchema: ZodType<CustomerFormSchema> = z.object({
    id: z.number(),
    customerTitleId: z
        .union([z.string(), z.number().min(1, { message: 'لطفاً عنوان را وارد کنید' })]),
displayName: z
        .string().min(1, { message: 'لطفاً نام نمایشی را وارد کنید' }).max(350,{message:'نام نمایشی نمیتواند بیشتر از 350 کاراکتر باشد'}),
locationId: z
        .union([z.string(), z.number().min(1, { message: 'لطفاً لوکیشن را وارد کنید' })]),
phoneNumber: z
        .string().min(11, { message: 'لطفاً شماره تلفن را وارد کنید' }).max(11,{message:'شماره تلفن نمیتواند بیشتر از 11 کاراکتر باشد'}),
jobStart: z
        .union([z.string(), z.number().min(1, { message: 'لطفاً ساعت شروع سرویس را وارد کنید' }).max(1000,{message:'ساعت شروع سرویس نمیتواند بیشتر از 1000 کاراکتر باشد'})]),
jobEnd: z
        .union([z.string(), z.number().min(1, { message: 'لطفاً ساعت پایان سرویس را وارد کنید' }).max(1000,{message:'ساعت پایان سرویس نمیتواند بیشتر از 1000 کاراکتر باشد'})]),
jobInterval: z
        .union([z.string(), z.number().min(1, { message: 'لطفاً بازه زمانی اجرا (دقیقه) را وارد کنید' }).max(1000,{message:'بازه زمانی اجرا (دقیقه) نمیتواند بیشتر از 1000 کاراکتر باشد'})]),
activityFieldId: z
        .union([z.string(), z.number().min(1, { message: 'لطفاً حوزه کاری را وارد کنید' })]),
firstName: z
        .string().min(1, { message: 'لطفاً نام را وارد کنید' }).max(250,{message:'نام نمیتواند بیشتر از 250 کاراکتر باشد'}),
lastName: z
        .string().min(1, { message: 'لطفاً نام خانوادگی را وارد کنید' }).max(250,{message:'نام خانوادگی نمیتواند بیشتر از 250 کاراکتر باشد'}),
legalName: z
        .string().max(250,{message:'نام قانونی نمیتواند بیشتر از 250 کاراکتر باشد'}),
})


const CustomerForm = (props: CustomerFormProps) => {
    const {
        onFormSubmit,
        defaultValues = {},
        newCustomer = false,
        children,
    } = props

    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<CustomerFormSchema>({
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

    const onSubmit = (values: CustomerFormSchema) => {
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

export default CustomerForm

