
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

import { apiGetCustomersCombo } from '@/services/CustomersService'

import { apiGetUsersCombo } from '@/services/UsersService'
import type { ComboDto } from '@/@types/common'

type InputsSectionProps = FormSectionBaseProps
var params;

const customers = await apiGetCustomersCombo<ComboDto[], any>(params);

const users = await apiGetUsersCombo<ComboDto[], any>(params);
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
                    label="مشتری"
                    invalid={Boolean(errors.customerId)}
                    errorMessage={errors.customerId?.message}
                    className="w-full"
                >
                    <Controller
                        name="customerId"
                        control={control}
                        render={({ field }) => (
                            <Select
                                placeholder="مشتری"
                                componentAs={CreatableSelect}
                                options={customers.map((title) => ({
                                    value: title.value, label: title.title,
                                }))}

                                onChange={(option) => { option != null && option.value != undefined ? field.onChange(option.value.toString()) : 0; }}
                            />
                        )}
                    />
                </FormItem>

                <FormItem
                    label="کاربر"
                    invalid={Boolean(errors.userId)}
                    errorMessage={errors.userId?.message}
                    className="w-full"
                >
                    <Controller
                        name="userId"
                        control={control}
                        render={({ field }) => (
                            <Select
                                placeholder="کاربر"
                                componentAs={CreatableSelect}
                                options={users.map((title) => ({
                                    value: title.value, label: title.title,
                                }))}

                                onChange={(option) => { option != null && option.value != undefined ? field.onChange(option.value.toString()) : 0; }}
                            />
                        )}
                    />
                </FormItem>
            </div>
        </Card>
    )
}

export default InputsSection

