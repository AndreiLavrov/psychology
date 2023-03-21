import { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = (
  {
    children,
  }) => {
  return (
    <section className="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      {children}
    </section>
  );
};
