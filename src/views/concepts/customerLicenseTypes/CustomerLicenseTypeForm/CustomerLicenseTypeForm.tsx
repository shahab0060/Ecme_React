
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
import type { CustomerLicenseTypeFormSchema } from './types'

type CustomerLicenseTypeFormProps = {
    onFormSubmit: (values: CustomerLicenseTypeFormSchema) => void
    defaultValues?: CustomerLicenseTypeFormSchema
    newCustomerLicenseType?: boolean
} & CommonProps

const validationSchema: ZodType<CustomerLicenseTypeFormSchema> = z.object({
    id: z.number(),
    name: z
        .string().min(1, { message: 'لطفاً نام را وارد کنید' }).max(350,{message:'نام نمیتواند بیشتر از 350 کاراکتر باشد'}),
})


const CustomerLicenseTypeForm = (props: CustomerLicenseTypeFormProps) => {
    const {
        onFormSubmit,
        defaultValues = {},
        newCustomerLicenseType = false,
        children,
    } = props

    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<CustomerLicenseTypeFormSchema>({
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

    const onSubmit = (values: CustomerLicenseTypeFormSchema) => {
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

export default CustomerLicenseTypeForm

