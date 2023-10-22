"use client";

const ImageWrapper = ({ src, className, alt, width, height, onClick }) => {
  return (
    <img
      src={src}
      className={className && className}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick && onClick}
    />
  );
};

export default ImageWrapper;
