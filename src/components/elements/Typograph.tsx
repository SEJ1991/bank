import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  children?: React.ReactNode;
  tag?: 'h1' | 'span' | 'p' | 'strong';
}
export default function Typograph({ className, children, tag = 'span' }: Props) {
  const baseClass = 'text-sm';
  const mergeClass = twMerge(baseClass, className);

  switch (tag) {
    case 'h1':
      return <h1 className={mergeClass}>{children}</h1>;

    case 'span':
      return <span className={mergeClass}>{children}</span>;

    case 'p':
      return <p className={mergeClass}>{children}</p>;

    case 'strong':
      return <strong className={mergeClass}>{children}</strong>;
  }
}
