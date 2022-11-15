import Image from "next/image";

interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

export const Logo = ({ className, src, alt }: LogoProps) => {
  return (
    <section>
      <Image
        src={src}
        alt={alt}
        className={className}
        width="60px"
        height="60px"
      />
    </section>
  );
};
