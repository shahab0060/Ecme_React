import { useEffect } from 'react'
import { Form } from '@/components/ui/Form'
import Container from '@/components/shared/Container'
import BottomStickyBar from '@/components/template/BottomStickyBar'
import OverviewSection from './OverviewSection'
import JobSection from './JobSection'
import TagsSection from './TagsSection'
import ProfileImageSection from './ProfileImageSection'
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
    firstName: z.string().min(1, { message: 'نام لازم است' }),
    lastName: z.string().min(1, { message: 'نام خانوادگی لازم است' }),
    displayName: z.string().min(1, { message: 'نام نمایشی لازم است' }),
    title: z.string().min(1, { message: 'عنوان لازم است' }),
    jobStart: z.union([z.string(), z.number().min(1, 'شروع بازه ربات الزامی است!')]),

    jobEnd: z.union([z.string(), z.number().min(1, 'پایان ربات الزامی است!')]),
    jobInterval: z.union([z.string(), z.number().min(1, ' بازه ربات الزامی است!')]),
    locationId: z.union([z.string(), z.number().min(1, 'لوکیشن الزامی است!')]),
    activityFieldId: z.union([z.string(), z.number().min(1, 'پایان بازه ربات الزامی است!')]),

    legalName: z.string().min(1, { message: 'نام قانونی لازم است' }),
    phoneNumber: z
        .string()
        .min(11, { message: 'لطفاً شماره موبایل خود را وارد کنید' })
        .max(11,{message:'شماره موبایل نمیتواند بیشتر از 11 کاراکتر باشد'}),
    avatar: z.string(),
    tags: z.array(z.object({ value: z.string(), label: z.string() })),
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
                        <OverviewSection control={control} errors={errors} />
                        <JobSection control={control} errors={errors}/>
                    </div>
                    <div className="md:w-[370px] gap-4 flex flex-col">
                        <ProfileImageSection
                            control={control}
                            errors={errors}
                        />
                        <TagsSection control={control} errors={errors} />
                        
                    </div>
                </div>
            </Container>
            <BottomStickyBar>{children}</BottomStickyBar>
        </Form>
    )
}

export default CustomerForm
