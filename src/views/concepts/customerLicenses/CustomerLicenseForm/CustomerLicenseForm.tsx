
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
import type { CustomerLicenseFormSchema } from './types'

type CustomerLicenseFormProps = {
    onFormSubmit: (values: CustomerLicenseFormSchema) => void
    defaultValues?: CustomerLicenseFormSchema
    newCustomerLicense?: boolean
} & CommonProps

const validationSchema: ZodType<CustomerLicenseFormSchema> = z.object({
    id: z.number(),
    customerId: z
        .union([z.string(), z.number().min(1, { message: 'لطفاً مشتری را وارد کنید' })]),
customerLicenseTypeId: z
        .union([z.string(), z.number().min(1, { message: 'لطفاً نوع را وارد کنید' })]),
expirationDate: z
        .string(),
description: z
        .string().min(1, { message: 'لطفاً توضیحات را وارد کنید' }).max(450,{message:'توضیحات نمیتواند بیشتر از 450 کاراکتر باشد'}),
customerLicenseReasonTypeId: z
        .union([z.string(), z.number().min(1, { message: 'لطفاً دلیل را وارد کنید' })]),
})


const CustomerLicenseForm = (props: CustomerLicenseFormProps) => {
    const {
        onFormSubmit,
        defaultValues = {},
        newCustomerLicense = false,
        children,
    } = props

    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<CustomerLicenseFormSchema>({
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

    const onSubmit = (values: CustomerLicenseFormSchema) => {
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

export default CustomerLicenseForm

