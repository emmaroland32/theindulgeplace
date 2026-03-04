import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  containerized?: boolean;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ className, containerized = true, children, ...props }, ref) => {
    const content = containerized ? <Container>{children}</Container> : children;

    return (
      <section
        ref={ref}
        className={cn('py-16 md:py-24', className)}
        {...props}
      >
        {content}
      </section>
    );
  }
);
Section.displayName = 'Section';

export { Section };
