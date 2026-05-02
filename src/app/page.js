import ProductCard from "@/component/ProductCard";
import SummarTips from "@/component/SummarTips";
import TopBrands from "@/component/TopBrands";
import jsonData from "@/jsonData";
import Image from "next/image";

const Home = async () => {
  const datas = await jsonData()
  const productData = datas.slice(0, 3)
// className=' relative w-11/12 aspect-[16/7] md:aspect-[16/6]   overflow-hidden rounded-3xl mx-auto '
  return (
    <div >
      {/* Banner site */}
      <div >
        <Image
          src="/banner-01.png"
          width={1300 }
          height={400}
          alt="banner"
          className="rounded-xl my-3 lg:mx-0"
        />
      </div>
      {/* Product Card site */}
      <div>
        <h2 className="text-4xl text-center py-7 font-bold text-sky-400">Popular Products</h2>
        <div className="grid grid-cols-1  mx-22 lg:grid-cols-3 gap-4">
          {
            productData.map(data => <ProductCard key={data.id} data={data}></ProductCard>)
          }
        </div>
      </div>
      {/* Summer care site */}
      <div>
        <h2 className="text-4xl text-center py-7 font-bold text-sky-400">Summer Care Tips</h2>
        <SummarTips></SummarTips>
      </div>
      {/* Top Brands site */}
      <div>
        <h2 className="text-4xl text-center py-7 font-bold text-sky-400">Top Brands</h2>
        <TopBrands></TopBrands>
      </div>

    </div>
  );
}
export default Home