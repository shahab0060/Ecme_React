
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

import { apiGetProfileDatasCombo } from '@/services/ProfileDatasService'

import { apiGetProfileDataTypesCombo } from '@/services/ProfileDataTypesService'

import { apiGetProfilesCombo } from '@/services/ProfilesService'
import type { ComboDto } from '@/@types/common'

type InputsSectionProps = FormSectionBaseProps
var params;

const profileDatas = await apiGetProfileDatasCombo<ComboDto[], any>(params);

const profileDataTypes = await apiGetProfileDataTypesCombo<ComboDto[], any>(params);

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
                    label="سرگروه"
                    invalid={Boolean(errors.parentId)}
                    errorMessage={errors.parentId?.message}
                    className="w-full"
                >
                    <Controller
                        name="parentId"
                        control={control}
                        render={({ field }) => (
                            <Select
                                placeholder="سرگروه"
                                componentAs={CreatableSelect}
                                options={profileDatas.map((title) => ({
                                    value: title.value, label: title.title,
                                }))}

                                onChange={(option) => { option != null && option.value != undefined ? field.onChange(option.value.toString()) : 0; }}
                            />
                        )}
                    />
                </FormItem>

                <FormItem
                    label="نوع دیتا پروفایل"
                    invalid={Boolean(errors.profileDataTypeId)}
                    errorMessage={errors.profileDataTypeId?.message}
                    className="w-full"
                >
                    <Controller
                        name="profileDataTypeId"
                        control={control}
                        render={({ field }) => (
                            <Select
                                placeholder="نوع دیتا پروفایل"
                                componentAs={CreatableSelect}
                                options={profileDataTypes.map((title) => ({
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
                    label="نام"
                    invalid={Boolean(errors.name)}
                    errorMessage={errors.name?.message}
                >
                    <Controller
                        name="name"
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
                    label="کد گرفتن اطلاعات"
                    invalid={Boolean(errors.fetchCode)}
                    errorMessage={errors.fetchCode?.message}
                >
                    <Controller
                        name="fetchCode"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="کد گرفتن اطلاعات"
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

