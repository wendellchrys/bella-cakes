import Image from 'next/image';
import Link from 'next/link';

export type EmptyProps = {
  title: string;
  description: string;
  hasLink?: boolean;
};

export const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <div className="flex flex-col items-center p-8 text-center">

    <h2 className="text-primary-500 pt-4 text-2xl">{title}</h2>
    <p className="mb-4 text-lg font-light text-white">{description}</p>

    {hasLink && (
      <Link href="/" passHref>
        Voltar a Loja
      </Link>
    )}
  </div>
);
