import { z } from "zod";
import { t } from '@/scripts/translate'
import { commonValidators } from "@/lib/schemas"

export const requestACallSchema = z.object({
    name: z.string()
        .min(3, { message: t('fields.full_name.error') })
        .max(100, { message: t('fields.full_name.error') }),
    email: commonValidators.email,
    company: z.string()
        .min(3, { message: t('fields.company.error') })
        .max(100, { message: t('fields.company.error') }),
    phone: z.string()
        .min(7, { message: t('fields.phone.error') })
        .max(20, { message: t('fields.phone.error') }),
    accept: z.boolean().refine((data) => data === true, { message: t('fields.accept.error') })
})

export const newsletterSchema = z.object({
    email: commonValidators.email,
    accept: z.boolean().refine((data) => data === true, { message: t('fields.accept.error') })
})