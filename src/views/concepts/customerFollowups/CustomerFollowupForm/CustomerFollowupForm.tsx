
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
import type { CustomerFollowupFormSchema } from './types'

type CustomerFollowupFormProps = {
    onFormSubmit: (values: CustomerFollowupFormSchema) => void
    defaultValues?: CustomerFollowupFormSchema
    newCustomerFollowup?: boolean
} & CommonProps

const validationSchema: ZodType<CustomerFollowupFormSchema> = z.object({
    id: z.number(),
    customerFollowupTypeId: z
        .union([z.string(), z.number().min(1, { message: 'لطفاً نوع پیگیری را وارد کنید' })]),
customerId: z
        .union([z.string(), z.number().min(1, { message: 'لطفاً مشتری را وارد کنید' })]),
userId: z
        .union([z.string(), z.number().min(1, { message: 'لطفاً کاربر را وارد کنید' })]),
result: z
        .string().min(1, { message: 'لطفاً نتیجه را وارد کنید' }),
referredUserId: z
        .union([z.string(), z.number()]),
referredDescription: z
        .string(),
})


const CustomerFollowupForm = (props: CustomerFollowupFormProps) => {
    const {
        onFormSubmit,
        defaultValues = {},
        newCustomerFollowup = false,
        children,
    } = props

    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<CustomerFollowupFormSchema>({
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

    const onSubmit = (values: CustomerFollowupFormSchema) => {
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

export default CustomerFollowupForm

