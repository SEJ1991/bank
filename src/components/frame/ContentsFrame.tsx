import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}
export default function ContentsFrame({ className, children, onClick }: Props) {
  return (
    <section className={twMerge('bg-primary-300 p-4 rounded-lg', className)} onClick={onClick}>
      {children}
    </section>
  );
}
