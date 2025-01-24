
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
import type { WorkerEventFormSchema } from './types'

type WorkerEventFormProps = {
    onFormSubmit: (values: WorkerEventFormSchema) => void
    defaultValues?: WorkerEventFormSchema
    newWorkerEvent?: boolean
} & CommonProps

const validationSchema: ZodType<WorkerEventFormSchema> = z.object({
    id: z.number(),
    customerProfileId: z
        .union([z.string(), z.number().min(1, { message: 'لطفاً پروفایل مشتری را وارد کنید' })]),
transferCount: z
        .union([z.string(), z.number().min(1, { message: 'لطفاً تعداد انتقال را وارد کنید' }).max(2147483647,{message:'تعداد انتقال نمیتواند بیشتر از 2147483647 کاراکتر باشد'})]),
transferDateTime: z
        .string(),
isSucceed: z
        .string(),
})


const WorkerEventForm = (props: WorkerEventFormProps) => {
    const {
        onFormSubmit,
        defaultValues = {},
        newWorkerEvent = false,
        children,
    } = props

    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<WorkerEventFormSchema>({
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

    const onSubmit = (values: WorkerEventFormSchema) => {
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

export default WorkerEventForm

