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
      <ExternalLink href="https://twitter.com/pachapapaa">
        Pachapapa
      </ExternalLink>
      .
    </p>
  )
}
