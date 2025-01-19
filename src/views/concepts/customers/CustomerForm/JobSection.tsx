import { useMemo } from 'react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Select, { Option as DefaultOption } from '@/components/ui/Select'
import Avatar from '@/components/ui/Avatar'
import { FormItem } from '@/components/ui/Form'
import NumericInput from '@/components/shared/NumericInput'
import { Controller } from 'react-hook-form'
import { components } from 'react-select'
import type { FormSectionBaseProps } from './types'
import type { ControlProps, OptionProps } from 'react-select'

type JobSectionProps = FormSectionBaseProps

type combo = {
    title: string
    value: string
}

const JobSection = ({ control, errors }: JobSectionProps) => {
    // const activityFieldsList = useMemo(() => {
    //     const activityFieldsList: Array<combo> = JSON.parse(
    //         JSON.stringify(countryList),
    //     )

    //     return activityFieldsList.map((field) => {
    //         field.title = field.title;
    //         return field
    //     })
    // }, [])

    return (
        <Card>
            <h4 className="mb-6">ربات</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem
                    label="شروع ربات"
                    invalid={Boolean(errors.jobStart)}
                    errorMessage={errors.jobStart?.message}
                >
                    <Controller
                        name="jobStart"
                        control={control}
                        render={({ field }) => (
                            <NumericInput
                            
                                placeholder="شروع ربات"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="پایان ربات"
                    invalid={Boolean(errors.jobEnd)}
                    errorMessage={errors.jobEnd?.message}
                    className="w-full"
                >
                    <Controller
                        name="jobEnd"
                        control={control}
                        render={({ field }) => (
                            <NumericInput
                                type="text"
                                autoComplete="off"
                                placeholder="0"
                                value={field.value}
                                isAllowed={(values) => {
                                    const { floatValue } = values
                                    return (floatValue || 0) <= 100
                                }}
                                onChange={field.onChange}
                            />
                        )}
                    />
                </FormItem>
            </div>
            
            <div className="flex items-end gap-4 w-full">
                <FormItem
                    className="w-full"
                    invalid={
                        Boolean(errors.activityFieldId)
                    }
                    errorMessage={errors.activityFieldId?.message}
                >
                    <Controller
                        name="activityFieldId"
                        control={control}
                        render={({ field }) => (
                            <NumericInput
                                autoComplete="off"
                                placeholder="ضمینه فعالیت"
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                            />
                        )}
                    />
                </FormItem>
            </div>
        </Card>
    )
}

export default JobSection
