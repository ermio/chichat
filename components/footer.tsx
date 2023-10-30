import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      Free chatGPT interface built with{' '}
      <ExternalLink href="https://github.com/vercel-labs/ai-chatbot">Vercel</ExternalLink> and sponsored by{' '}
      <ExternalLink href="https://etherscan.io/address/0x0c4f3263ac508FE739010EDB8765dA50Ee271C38">
        Donors
      </ExternalLink>
      .
    </p>
  )
}
