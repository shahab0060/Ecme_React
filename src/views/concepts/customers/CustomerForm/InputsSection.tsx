
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

import { apiGetCustomerTitlesCombo } from '@/services/CustomerTitlesService'

import { apiGetLocationsCombo } from '@/services/LocationsService'

import { apiGetActivityFieldsCombo } from '@/services/ActivityFieldsService'
import type { ComboDto } from '@/@types/common'

type InputsSectionProps = FormSectionBaseProps
var params;

const customerTitles = await apiGetCustomerTitlesCombo<ComboDto[], any>(params);

const locations = await apiGetLocationsCombo<ComboDto[], any>(params);

const activityFields = await apiGetActivityFieldsCombo<ComboDto[], any>(params);
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
                    label="عنوان"
                    invalid={Boolean(errors.customerTitleId)}
                    errorMessage={errors.customerTitleId?.message}
                    className="w-full"
                >
                    <Controller
                        name="customerTitleId"
                        control={control}
                        render={({ field }) => (
                            <Select
                                placeholder="عنوان"
                                componentAs={CreatableSelect}
                                options={customerTitles.map((title) => ({
                                    value: title.value, label: title.title,
                                }))}

                                onChange={(option) => { option != null && option.value != undefined ? field.onChange(option.value.toString()) : 0; }}
                            />
                        )}
                    />
                </FormItem>

 <FormItem
                    label="نام نمایشی"
                    invalid={Boolean(errors.displayName)}
                    errorMessage={errors.displayName?.message}
                >
                    <Controller
                        name="displayName"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="نام نمایشی"
                                {...field}
                            />
                        )}
                    />
                </FormItem>

                <FormItem
                    label="لوکیشن"
                    invalid={Boolean(errors.locationId)}
                    errorMessage={errors.locationId?.message}
                    className="w-full"
                >
                    <Controller
                        name="locationId"
                        control={control}
                        render={({ field }) => (
                            <Select
                                placeholder="لوکیشن"
                                componentAs={CreatableSelect}
                                options={locations.map((title) => ({
                                    value: title.value, label: title.title,
                                }))}

                                onChange={(option) => { option != null && option.value != undefined ? field.onChange(option.value.toString()) : 0; }}
                            />
                        )}
                    />
                </FormItem>

 <FormItem
                    label="شماره تلفن"
                    invalid={Boolean(errors.phoneNumber)}
                    errorMessage={errors.phoneNumber?.message}
                >
                    <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="شماره تلفن"
                                {...field}
                            />
                        )}
                    />
                </FormItem>

                <FormItem
                    label="ساعت شروع سرویس"
                    className="w-full"
                    invalid={
                        Boolean(errors.jobStart)
                    }
                    errorMessage={errors.jobStart?.message}
                >
                    <Controller
                        name="jobStart"
                        control={control}
                        render={({ field }) => (
                            <NumericInput
                                autoComplete="off"
                                placeholder="ساعت شروع سرویس"
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                            />
                        )}
                    />
                </FormItem>

                <FormItem
                    label="ساعت پایان سرویس"
                    className="w-full"
                    invalid={
                        Boolean(errors.jobEnd)
                    }
                    errorMessage={errors.jobEnd?.message}
                >
                    <Controller
                        name="jobEnd"
                        control={control}
                        render={({ field }) => (
                            <NumericInput
                                autoComplete="off"
                                placeholder="ساعت پایان سرویس"
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                            />
                        )}
                    />
                </FormItem>

                <FormItem
                    label="بازه زمانی اجرا (دقیقه)"
                    className="w-full"
                    invalid={
                        Boolean(errors.jobInterval)
                    }
                    errorMessage={errors.jobInterval?.message}
                >
                    <Controller
                        name="jobInterval"
                        control={control}
                        render={({ field }) => (
                            <NumericInput
                                autoComplete="off"
                                placeholder="بازه زمانی اجرا (دقیقه)"
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                            />
                        )}
                    />
                </FormItem>

                <FormItem
                    label="حوزه کاری"
                    invalid={Boolean(errors.activityFieldId)}
                    errorMessage={errors.activityFieldId?.message}
                    className="w-full"
                >
                    <Controller
                        name="activityFieldId"
                        control={control}
                        render={({ field }) => (
                            <Select
                                placeholder="حوزه کاری"
                                componentAs={CreatableSelect}
                                options={activityFields.map((title) => ({
                                    value: title.value, label: title.title,
                                }))}

                                onChange={(option) => { option != null && option.value != undefined ? field.onChange(option.value.toString()) : 0; }}
                            />
                        )}
                    />
                </FormItem>

 <FormItem
                    label="نام"
                    invalid={Boolean(errors.firstName)}
                    errorMessage={errors.firstName?.message}
                >
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="نام"
                                {...field}
                            />
                        )}
                    />
                </FormItem>

 <FormItem
                    label="نام خانوادگی"
                    invalid={Boolean(errors.lastName)}
                    errorMessage={errors.lastName?.message}
                >
                    <Controller
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="نام خانوادگی"
                                {...field}
                            />
                        )}
                    />
                </FormItem>

 <FormItem
                    label="نام قانونی"
                    invalid={Boolean(errors.legalName)}
                    errorMessage={errors.legalName?.message}
                >
                    <Controller
                        name="legalName"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="نام قانونی"
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

