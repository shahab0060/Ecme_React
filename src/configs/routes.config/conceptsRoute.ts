import { lazy } from 'react'
import { CONCEPTS_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const conceptsRoute: Routes = [
    {
        key: 'concepts.ai.chat',
        path: `${CONCEPTS_PREFIX_PATH}/ai/chat`,
        component: lazy(() => import('@/views/concepts/ai/Chat')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.ai.image',
        path: `${CONCEPTS_PREFIX_PATH}/ai/image`,
        component: lazy(() => import('@/views/concepts/ai/Image')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },

    {
        key: 'concepts.customers.customerList',
        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-list`,
        component: lazy(
            () => import('@/views/concepts/customers/CustomerList'),
        ),
        authority: [ADMIN, USER],
    },
    {
        key: 'concepts.customers.customerEdit',
        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-edit/:id`,
        component: lazy(
            () => import('@/views/concepts/customers/CustomerEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ویرایش مشتری',
                description:
                    'Manage customer details, purchase history, and preferences.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.customers.customerCreate',
        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-create`,
        component: lazy(
            () => import('@/views/concepts/customers/CustomerCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ایجاد مشتری',
                description:
                    'Manage customer details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.customers.customerDetails',
        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-details/:id`,
        component: lazy(
            () => import('@/views/concepts/customers/CustomerDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.brands.brandList',
        path: `${CONCEPTS_PREFIX_PATH}/brands/brand-list`,
        component: lazy(
            () => import('@/views/concepts/brands/brandList'),
        ),
        authority: [ADMIN, USER],
    },
    {
        key: 'concepts.brands.brandEdit',
        path: `${CONCEPTS_PREFIX_PATH}/brands/brand-edit/:id`,
        component: lazy(
            () => import('@/views/concepts/brands/brandEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ویرایش برند',
                description:
                    'Manage brand details, purchase history, and preferences.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.brands.brandCreate',
        path: `${CONCEPTS_PREFIX_PATH}/brands/brand-create`,
        component: lazy(
            () => import('@/views/concepts/brands/brandCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ایجاد برند',
                description:
                    'Manage brand details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.brands.brandDetails',
        path: `${CONCEPTS_PREFIX_PATH}/brands/brand-details/:id`,
        component: lazy(
            () => import('@/views/concepts/brands/brandDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.products.productList',
        path: `${CONCEPTS_PREFIX_PATH}/products/product-list`,
        component: lazy(
            () => import('@/views/concepts/products/productList'),
        ),
        authority: [ADMIN, USER],
    },
    {
        key: 'concepts.products.productEdit',
        path: `${CONCEPTS_PREFIX_PATH}/products/product-edit/:id`,
        component: lazy(
            () => import('@/views/concepts/products/productEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ویرایش محصول',
                description:
                    'Manage product details, purchase history, and preferences.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.products.productCreate',
        path: `${CONCEPTS_PREFIX_PATH}/products/product-create`,
        component: lazy(
            () => import('@/views/concepts/products/productCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ایجاد محصول',
                description:
                    'Manage product details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.products.productDetails',
        path: `${CONCEPTS_PREFIX_PATH}/products/product-details/:id`,
        component: lazy(
            () => import('@/views/concepts/products/productDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.customerTitles.customerTitleList',
        path: `${CONCEPTS_PREFIX_PATH}/customerTitles/customerTitle-list`,
        component: lazy(
            () => import('@/views/concepts/customerTitles/customerTitleList'),
        ),
        authority: [ADMIN, USER],
    },
    {
        key: 'concepts.customerTitles.customerTitleEdit',
        path: `${CONCEPTS_PREFIX_PATH}/customerTitles/customerTitle-edit/:id`,
        component: lazy(
            () => import('@/views/concepts/customerTitles/customerTitleEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ویرایش عنوان مشتری',
                description:
                    'Manage customerTitle details, purchase history, and preferences.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.customerTitles.customerTitleCreate',
        path: `${CONCEPTS_PREFIX_PATH}/customerTitles/customerTitle-create`,
        component: lazy(
            () => import('@/views/concepts/customerTitles/customerTitleCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ایجاد عنوان مشتری',
                description:
                    'Manage customerTitle details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.customerTitles.customerTitleDetails',
        path: `${CONCEPTS_PREFIX_PATH}/customerTitles/customerTitle-details/:id`,
        component: lazy(
            () => import('@/views/concepts/customerTitles/customerTitleDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.workerEvents.workerEventList',
        path: `${CONCEPTS_PREFIX_PATH}/workerEvents/workerEvent-list`,
        component: lazy(
            () => import('@/views/concepts/workerEvents/workerEventList'),
        ),
        authority: [ADMIN, USER],
    },
  
    {
        key: 'concepts.workerEvents.workerEventCreate',
        path: `${CONCEPTS_PREFIX_PATH}/workerEvents/workerEvent-create`,
        component: lazy(
            () => import('@/views/concepts/workerEvents/workerEventCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ایجاد ایونت ورکر',
                description:
                    'Manage workerEvent details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.workerEvents.workerEventDetails',
        path: `${CONCEPTS_PREFIX_PATH}/workerEvents/workerEvent-details/:id`,
        component: lazy(
            () => import('@/views/concepts/workerEvents/workerEventDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.logs.logList',
        path: `${CONCEPTS_PREFIX_PATH}/logs/log-list`,
        component: lazy(
            () => import('@/views/concepts/logs/logList'),
        ),
        authority: [ADMIN, USER],
    },
    {
        key: 'concepts.logs.logEdit',
        path: `${CONCEPTS_PREFIX_PATH}/logs/log-edit/:id`,
        component: lazy(
            () => import('@/views/concepts/logs/logEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ویرایش لاگ',
                description:
                    'Manage log details, purchase history, and preferences.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.logs.logCreate',
        path: `${CONCEPTS_PREFIX_PATH}/logs/log-create`,
        component: lazy(
            () => import('@/views/concepts/logs/logCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ایجاد لاگ',
                description:
                    'Manage log details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.logs.logDetails',
        path: `${CONCEPTS_PREFIX_PATH}/logs/log-details/:id`,
        component: lazy(
            () => import('@/views/concepts/logs/logDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.activityFields.activityFieldList',
        path: `${CONCEPTS_PREFIX_PATH}/activityFields/activityField-list`,
        component: lazy(
            () => import('@/views/concepts/activityFields/activityFieldList'),
        ),
        authority: [ADMIN, USER],
    },
    {
        key: 'concepts.activityFields.activityFieldEdit',
        path: `${CONCEPTS_PREFIX_PATH}/activityFields/activityField-edit/:id`,
        component: lazy(
            () => import('@/views/concepts/activityFields/activityFieldEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ویرایش ضمینه فعالیت',
                description:
                    'Manage activityField details, purchase history, and preferences.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.activityFields.activityFieldCreate',
        path: `${CONCEPTS_PREFIX_PATH}/activityFields/activityField-create`,
        component: lazy(
            () => import('@/views/concepts/activityFields/activityFieldCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ایجاد ضمینه فعالیت',
                description:
                    'Manage activityField details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.activityFields.activityFieldDetails',
        path: `${CONCEPTS_PREFIX_PATH}/activityFields/activityField-details/:id`,
        component: lazy(
            () => import('@/views/concepts/activityFields/activityFieldDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.locations.locationList',
        path: `${CONCEPTS_PREFIX_PATH}/locations/location-list`,
        component: lazy(
            () => import('@/views/concepts/locations/locationList'),
        ),
        authority: [ADMIN, USER],
    },
    {
        key: 'concepts.locations.locationEdit',
        path: `${CONCEPTS_PREFIX_PATH}/locations/location-edit/:id`,
        component: lazy(
            () => import('@/views/concepts/locations/locationEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ویرایش لوکیشن',
                description:
                    'Manage location details, purchase history, and preferences.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.locations.locationCreate',
        path: `${CONCEPTS_PREFIX_PATH}/locations/location-create`,
        component: lazy(
            () => import('@/views/concepts/locations/locationCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ایجاد لوکیشن',
                description:
                    'Manage location details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.locations.locationDetails',
        path: `${CONCEPTS_PREFIX_PATH}/locations/location-details/:id`,
        component: lazy(
            () => import('@/views/concepts/locations/locationDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.ProfileDataTypes.ProfileDataTypeList',
        path: `${CONCEPTS_PREFIX_PATH}/ProfileDataTypes/ProfileDataType-list`,
        component: lazy(
            () => import('@/views/concepts/ProfileDataTypes/ProfileDataTypeList'),
        ),
        authority: [ADMIN, USER],
    },
    {
        key: 'concepts.ProfileDataTypes.ProfileDataTypeEdit',
        path: `${CONCEPTS_PREFIX_PATH}/ProfileDataTypes/ProfileDataType-edit/:id`,
        component: lazy(
            () => import('@/views/concepts/ProfileDataTypes/ProfileDataTypeEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ویرایش نوع اطلاعات پروفایل',
                description:
                    'Manage ProfileDataType details, purchase history, and preferences.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.ProfileDataTypes.ProfileDataTypeCreate',
        path: `${CONCEPTS_PREFIX_PATH}/ProfileDataTypes/ProfileDataType-create`,
        component: lazy(
            () => import('@/views/concepts/ProfileDataTypes/ProfileDataTypeCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ایجاد نوع اطلاعات پروفایل',
                description:
                    'Manage ProfileDataType details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.ProfileDataTypes.ProfileDataTypeDetails',
        path: `${CONCEPTS_PREFIX_PATH}/ProfileDataTypes/ProfileDataType-details/:id`,
        component: lazy(
            () => import('@/views/concepts/ProfileDataTypes/ProfileDataTypeDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.profiles.profileList',
        path: `${CONCEPTS_PREFIX_PATH}/profiles/profile-list`,
        component: lazy(
            () => import('@/views/concepts/profiles/profileList'),
        ),
        authority: [ADMIN, USER],
    },
    {
        key: 'concepts.profiles.profileEdit',
        path: `${CONCEPTS_PREFIX_PATH}/profiles/profile-edit/:id`,
        component: lazy(
            () => import('@/views/concepts/profiles/profileEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ویرایش پروفایل',
                description:
                    'Manage profile details, purchase history, and preferences.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.profiles.profileCreate',
        path: `${CONCEPTS_PREFIX_PATH}/profiles/profile-create`,
        component: lazy(
            () => import('@/views/concepts/profiles/profileCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ایجاد پروفایل',
                description:
                    'Manage profile details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.profiles.profileDetails',
        path: `${CONCEPTS_PREFIX_PATH}/profiles/profile-details/:id`,
        component: lazy(
            () => import('@/views/concepts/profiles/profileDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.users.userList',
        path: `${CONCEPTS_PREFIX_PATH}/users/user-list`,
        component: lazy(
            () => import('@/views/concepts/users/userList'),
        ),
        authority: [ADMIN, USER],
    },
    {
        key: 'concepts.users.userEdit',
        path: `${CONCEPTS_PREFIX_PATH}/users/user-edit/:id`,
        component: lazy(
            () => import('@/views/concepts/users/userEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ویرایش کاربر',
                description:
                    'Manage user details, purchase history, and preferences.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.users.userCreate',
        path: `${CONCEPTS_PREFIX_PATH}/users/user-create`,
        component: lazy(
            () => import('@/views/concepts/users/userCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ایجاد کاربر',
                description:
                    'Manage user details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.users.userDetails',
        path: `${CONCEPTS_PREFIX_PATH}/users/user-details/:id`,
        component: lazy(
            () => import('@/views/concepts/users/userDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.products.productList',
        path: `${CONCEPTS_PREFIX_PATH}/products/product-list`,
        component: lazy(() => import('@/views/concepts/products/ProductList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'concepts.products.productEdit',
        path: `${CONCEPTS_PREFIX_PATH}/products/product-edit/:id`,
        component: lazy(() => import('@/views/concepts/products/ProductEdit')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ویرایش محصول',
                description:
                    'Quickly manage product details, stock, and availability.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.products.productCreate',
        path: `${CONCEPTS_PREFIX_PATH}/products/product-create`,
        component: lazy(
            () => import('@/views/concepts/products/ProductCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ایجاد محصول',
                description:
                    'Quickly add products to your inventory. Enter key details, manage stock, and set availability.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.projects.scrumBoard',
        path: `${CONCEPTS_PREFIX_PATH}/projects/scrum-board`,
        component: lazy(() => import('@/views/concepts/projects/ScrumBoard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.projects.projectList',
        path: `${CONCEPTS_PREFIX_PATH}/projects/project-list`,
        component: lazy(() => import('@/views/concepts/projects/ProjectList')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.projects.projectDetails',
        path: `${CONCEPTS_PREFIX_PATH}/projects/project-details/:id`,
        component: lazy(
            () => import('@/views/concepts/projects/ProjectDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.projects.projectTasks',
        path: `${CONCEPTS_PREFIX_PATH}/projects/tasks`,
        component: lazy(() => import('@/views/concepts/projects/Tasks')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.projects.projectIssue',
        path: `${CONCEPTS_PREFIX_PATH}/projects/tasks/:id`,
        component: lazy(() => import('@/views/concepts/projects/Issue')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.orders.orderList',
        path: `${CONCEPTS_PREFIX_PATH}/orders/order-list`,
        component: lazy(() => import('@/views/concepts/orders/OrderList')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.orders.orderEdit',
        path: `${CONCEPTS_PREFIX_PATH}/orders/order-edit/:id`,
        component: lazy(() => import('@/views/concepts/orders/OrderEdit')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'ویرایش سفارش',
                contained: true,
                description: 'Manage and track orders efficiently',
            },
            footer: false,
        },
    },
    {
        key: 'concepts.orders.orderCreate',
        path: `${CONCEPTS_PREFIX_PATH}/orders/order-create`,
        component: lazy(() => import('@/views/concepts/orders/OrderCreate')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'نظم ایجاد کنید',
                contained: true,
                description:
                    'Create new customer orders quickly and accurately',
            },
            footer: false,
        },
    },
    {
        key: 'concepts.orders.orderDetails',
        path: `${CONCEPTS_PREFIX_PATH}/orders/order-details/:id`,
        component: lazy(() => import('@/views/concepts/orders/OrderDetails')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                contained: true,
                title: lazy(
                    () =>
                        import(
                            '@/views/concepts/orders/OrderDetails/components/OrderDetailHeader'
                        ),
                ),
                extraHeader: lazy(
                    () =>
                        import(
                            '@/views/concepts/orders/OrderDetails/components/OrderDetailHeaderExtra'
                        ),
                ),
            },
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.account.settings',
        path: `${CONCEPTS_PREFIX_PATH}/account/settings`,
        component: lazy(() => import('@/views/concepts/accounts/Settings')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'تنظیمات',
            },
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.account.activityLog',
        path: `${CONCEPTS_PREFIX_PATH}/account/activity-log`,
        component: lazy(() => import('@/views/concepts/accounts/ActivityLog')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.account.rolesPermissions',
        path: `${CONCEPTS_PREFIX_PATH}/account/roles-permissions`,
        component: lazy(
            () => import('@/views/concepts/accounts/RolesPermissions'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.account.pricing',
        path: `${CONCEPTS_PREFIX_PATH}/account/pricing`,
        component: lazy(() => import('@/views/concepts/accounts/Pricing')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.helpCenter.supportHub',
        path: `${CONCEPTS_PREFIX_PATH}/help-center/support-hub`,
        component: lazy(
            () => import('@/views/concepts/help-center/SupportHub'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutterless',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.helpCenter.article',
        path: `${CONCEPTS_PREFIX_PATH}/help-center/article/:id`,
        component: lazy(() => import('@/views/concepts/help-center/Article')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.helpCenter.editArticle',
        path: `${CONCEPTS_PREFIX_PATH}/help-center/edit-article/:id`,
        component: lazy(
            () => import('@/views/concepts/help-center/EditArticle'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageBackgroundType: 'plain',
            footer: false,
        },
    },
    {
        key: 'concepts.helpCenter.manageArticle',
        path: `${CONCEPTS_PREFIX_PATH}/help-center/manage-article`,
        component: lazy(
            () => import('@/views/concepts/help-center/ManageArticle'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageBackgroundType: 'plain',
            footer: false,
        },
    },
    {
        key: 'concepts.calendar',
        path: `${CONCEPTS_PREFIX_PATH}/calendar`,
        component: lazy(() => import('@/views/concepts/calendar/Calendar')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.fileManager',
        path: `${CONCEPTS_PREFIX_PATH}/file-manager`,
        component: lazy(() => import('@/views/concepts/files/FileManager')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.mail',
        path: `${CONCEPTS_PREFIX_PATH}/mail`,
        component: lazy(() => import('@/views/concepts/mail/Mail')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.chat',
        path: `${CONCEPTS_PREFIX_PATH}/chat`,
        component: lazy(() => import('@/views/concepts/chat/Chat')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
]

export default conceptsRoute
