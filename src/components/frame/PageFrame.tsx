import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  children?: React.ReactNode;
}
export default function PageFrame({ className, children }: Props) {
  return (
    <article
      className={twMerge(
        'w-full min-h-full p-2 pb-14 overflow-y-auto overflow-x-hidden',
        className
      )}
    >
      {children}
    </article>
  );
}
