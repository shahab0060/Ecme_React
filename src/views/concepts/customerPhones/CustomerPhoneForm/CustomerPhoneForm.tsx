
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
import type { CustomerPhoneFormSchema } from './types'

type CustomerPhoneFormProps = {
    onFormSubmit: (values: CustomerPhoneFormSchema) => void
    defaultValues?: CustomerPhoneFormSchema
    newCustomerPhone?: boolean
} & CommonProps

const validationSchema: ZodType<CustomerPhoneFormSchema> = z.object({
    id: z.number(),
    customerId: z
        .union([z.string(), z.number().min(1, { message: 'لطفاً مشتری را وارد کنید' })]),
phone: z
        .string().min(1, { message: 'لطفاً تلفن را وارد کنید' }).max(250,{message:'تلفن نمیتواند بیشتر از 250 کاراکتر باشد'}),
})


const CustomerPhoneForm = (props: CustomerPhoneFormProps) => {
    const {
        onFormSubmit,
        defaultValues = {},
        newCustomerPhone = false,
        children,
    } = props

    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<CustomerPhoneFormSchema>({
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

    const onSubmit = (values: CustomerPhoneFormSchema) => {
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

export default CustomerPhoneForm

