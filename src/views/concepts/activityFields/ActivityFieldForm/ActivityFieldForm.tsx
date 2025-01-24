
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
import type { ActivityFieldFormSchema } from './types'

type ActivityFieldFormProps = {
    onFormSubmit: (values: ActivityFieldFormSchema) => void
    defaultValues?: ActivityFieldFormSchema
    newActivityField?: boolean
} & CommonProps

const validationSchema: ZodType<ActivityFieldFormSchema> = z.object({
    id: z.number(),
    parentId: z
        .union([z.string(), z.number()]),
type: z
        .string(),
name: z
        .string().min(1, { message: 'لطفاً نام را وارد کنید' }).max(250,{message:'نام نمیتواند بیشتر از 250 کاراکتر باشد'}),
})


const ActivityFieldForm = (props: ActivityFieldFormProps) => {
    const {
        onFormSubmit,
        defaultValues = {},
        newActivityField = false,
        children,
    } = props

    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<ActivityFieldFormSchema>({
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

    const onSubmit = (values: ActivityFieldFormSchema) => {
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

export default ActivityFieldForm

