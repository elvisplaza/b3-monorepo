import Image from "next/image";

interface LogoProps {
  url: string;
  alt: string;
  className?: string;
}

export const Logo = ({ url, alt, className }: LogoProps) => {
  return (
    <Image
      src={url}
      alt={alt}
      className={className}
    />
  );
};
