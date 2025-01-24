
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

import { apiGetProfilesCombo } from '@/services/ProfilesService'
import type { ComboDto } from '@/@types/common'

type InputsSectionProps = FormSectionBaseProps
var params;

const customers = await apiGetCustomersCombo<ComboDto[], any>(params);

const profiles = await apiGetProfilesCombo<ComboDto[], any>(params);
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
                    label="پروفایل"
                    invalid={Boolean(errors.profileId)}
                    errorMessage={errors.profileId?.message}
                    className="w-full"
                >
                    <Controller
                        name="profileId"
                        control={control}
                        render={({ field }) => (
                            <Select
                                placeholder="پروفایل"
                                componentAs={CreatableSelect}
                                options={profiles.map((title) => ({
                                    value: title.value, label: title.title,
                                }))}

                                onChange={(option) => { option != null && option.value != undefined ? field.onChange(option.value.toString()) : 0; }}
                            />
                        )}
                    />
                </FormItem>

 <FormItem
                    label="سرور بانک اطلاعاتی"
                    invalid={Boolean(errors.dbServer)}
                    errorMessage={errors.dbServer?.message}
                >
                    <Controller
                        name="dbServer"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="سرور بانک اطلاعاتی"
                                {...field}
                            />
                        )}
                    />
                </FormItem>

 <FormItem
                    label="نام کاربری بانک اطلاعاتی"
                    invalid={Boolean(errors.dbUserId)}
                    errorMessage={errors.dbUserId?.message}
                >
                    <Controller
                        name="dbUserId"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="نام کاربری بانک اطلاعاتی"
                                {...field}
                            />
                        )}
                    />
                </FormItem>

 <FormItem
                    label="رمز عبور بانک اطلاعاتی"
                    invalid={Boolean(errors.dbPassword)}
                    errorMessage={errors.dbPassword?.message}
                >
                    <Controller
                        name="dbPassword"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="رمز عبور بانک اطلاعاتی"
                                {...field}
                            />
                        )}
                    />
                </FormItem>

 <FormItem
                    label="نام بانک اطلاعاتی"
                    invalid={Boolean(errors.dbName)}
                    errorMessage={errors.dbName?.message}
                >
                    <Controller
                        name="dbName"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="نام بانک اطلاعاتی"
                                {...field}
                            />
                        )}
                    />
                </FormItem>

 <FormItem
                    label="گزینه های بانک اطلاعاتی"
                    invalid={Boolean(errors.dbOptions)}
                    errorMessage={errors.dbOptions?.message}
                >
                    <Controller
                        name="dbOptions"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="گزینه های بانک اطلاعاتی"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
            </div>
        </Card>
    )
}

export default InputsSection

