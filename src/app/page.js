import ProductCard from "@/component/ProductCard";
import jsonData from "@/jsonData";
import Image from "next/image";

 const Home = async () => {
  const productData =await jsonData()
  
  return (
    <div >
      <div className=' relative w-11/12 aspect-[16/7] md:aspect-[16/6]   overflow-hidden rounded-3xl mx-auto '>
        <Image
          src="/bannar-01.png"
          alt="banner"
          fill
          loading="eager"
          className="object-cover "
        />
      </div>
      <div>
          <h2 className="text-4xl text-center py-5 font-bold text-sky-400">Popular Products</h2>
          <div className="grid grid-cols-3 gap-3">
            {
            productData.map(data => <ProductCard key={data.id} data={data}></ProductCard>)
          }
          </div>
      </div>
    </div>
  );
}
export default Home