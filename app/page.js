import Image from "next/image";

export default function Home() {
  const images = [
    "HomeImage1.png",
    "HomeImage2.png",
    "HomeImage3.png",
    "HomeImage4.png",
    "HomeImage5.png",
    "HomeImage6.png",
  ];
  return (
    <div>
      {images.map((image, index) => (
        <Image
          src={`/${image}`}
          layout="center"
          width={1980}
          height={150}
          className="justify-center"
          alt={`homeImg-${index}`}
          key={index} // Don't forget to add a unique key for each mapped element
        />
      ))}
    </div>
  );
}
