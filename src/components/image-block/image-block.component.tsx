import "./image-block.style.css"
import Image from "next/image";

interface ImageBlockProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  title?: string;
}

export const ImageBlock = (props: ImageBlockProps) => {
  const { src, alt, title, width, height } = props;
  return (
    <div className="image-block bg-gray-100">
      <Image src={src} alt={alt} width={width ? width : 0} height={height ? height : 0}/>
      {title && <p className={"image-block-title"}>{title}</p>}
    </div>
  )
}