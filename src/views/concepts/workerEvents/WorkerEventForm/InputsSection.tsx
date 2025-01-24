
import { useMemo } from 'react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Select, { Option as DefaultOption } from '@/components/ui/Select'
import Avatar from '@/components/ui/Avatar'
import { FormItem } from '@/components/ui/Form'
import NumericInput from '@/components/shared/NumericInput'
import { countryList } from '@/constants/countries.constant'
import { Controller } from 'react-hook-form'
import { components } from 'react-select'
import type { FormSectionBaseProps } from './types'
import type { ControlProps, OptionProps } from 'react-select'
import CreatableSelect from 'react-select/creatable'

import { apiGetCustomerProfilesCombo } from '@/services/CustomerProfilesService'
import type { ComboDto } from '@/@types/common'

type InputsSectionProps = FormSectionBaseProps
var params;

const customerProfiles = await apiGetCustomerProfilesCombo<ComboDto[], any>(params);
const InputsSection = ({ control, errors }: InputsSectionProps) => {
    return (
        <Card>
            <h4 className="mb-6">نمای کلی</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <div style={{ display: 'none' }}>
                    <FormItem
                    >
                        <Controller
                            name="id"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    type="hidden"
                                    autoComplete="off"
                                    placeholder="آیدی"
                                    {...field}
                                />
                            )}
                        />
                    </FormItem>
                </div>
                    
                <FormItem
                    label="پروفایل مشتری"
                    invalid={Boolean(errors.customerProfileId)}
                    errorMessage={errors.customerProfileId?.message}
                    className="w-full"
                >
                    <Controller
                        name="customerProfileId"
                        control={control}
                        render={({ field }) => (
                            <Select
                                placeholder="پروفایل مشتری"
                                componentAs={CreatableSelect}
                                options={customerProfiles.map((title) => ({
                                    value: title.value, label: title.title,
                                }))}

                                onChange={(option) => { option != null && option.value != undefined ? field.onChange(option.value.toString()) : 0; }}
                            />
                        )}
                    />
                </FormItem>

                <FormItem
                    label="تعداد انتقال"
                    className="w-full"
                    invalid={
                        Boolean(errors.transferCount)
                    }
                    errorMessage={errors.transferCount?.message}
                >
                    <Controller
                        name="transferCount"
                        control={control}
                        render={({ field }) => (
                            <NumericInput
                                autoComplete="off"
                                placeholder="تعداد انتقال"
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

export default InputsSection

