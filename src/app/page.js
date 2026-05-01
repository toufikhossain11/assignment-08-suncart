import Image from "next/image";

export default function Home() {
  return (
    <div >
      <div className='relative w-11/12 aspect-[16/7] md:aspect-[16/6]  overflow-hidden rounded-3xl mx-auto '>
        <Image
          src="/bannar-01.png"
          alt="banner"
          fill
          
          className="object-cover"
          
        />
      </div>
    </div>
  );
}
