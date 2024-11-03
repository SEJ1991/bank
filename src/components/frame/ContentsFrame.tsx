import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  children?: React.ReactNode;
}
export default function ContentsFrame({ className, children }: Props) {
  return (
    <section className={twMerge('bg-primary-300 p-2 rounded-lg', className)}>{children}</section>
  );
}
