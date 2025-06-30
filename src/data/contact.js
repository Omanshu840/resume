import { resume } from "./resume";

export const contacts = [
    {
        value: resume.basics.email,
        url: `mailto:${resume.basics.email}`
    },
    {
        value: resume.basics.phone,
        url: `tel:91$${resume.basics.phone}`
    },
    {
        value: 'LinkedIn',
        url: `https://www.${resume.basics.linkedIn}`
    },
    {
        value: resume.basics.website,
        url: `https://${resume.basics.website}`
    }
]