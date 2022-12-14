import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.atfault.dev/contact-us',
        isHighlighted: true,
      },
      {
        label: t('Brand'),
        href: 'https://docs.atfault.dev/brand',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/pancakeswap',
      },
      {
        label: t('Community'),
        href: 'https://docs.atfault.dev/contact-us/telegram',
      },
      {
        label: t('Litepaper'),
        href: 'https://v2litepaper.atfault.dev/',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.atfault.dev/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.atfault.dev/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.atfault.dev/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.atfault.dev',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.atfault.dev/code/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://docs.atfault.dev/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
      },
      {
        label: t('Careers'),
        href: 'https://docs.atfault.dev/hiring/become-a-chef',
      },
    ],
  },
]
