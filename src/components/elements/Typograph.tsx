interface Props {
  className?: string;
  children?: React.ReactNode;
  tag?: 'h1' | 'span' | 'p' | 'strong';
}
export default function Typograph({ className, children, tag = 'span' }: Props) {
  switch (tag) {
    case 'h1':
      return <h1 className={className}>{children}</h1>;

    case 'span':
      return <span className={className}>{children}</span>;

    case 'p':
      return <p className={className}>{children}</p>;

    case 'strong':
      return <strong className={className}>{children}</strong>;
  }
}
