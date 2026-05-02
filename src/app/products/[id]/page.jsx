import jsonData from "@/jsonData";
import { FaStar } from "react-icons/fa";
import { Card, Button, CardContent } from "@heroui/react";
import Image from "next/image";

const detailsPage = async ({ params }) => {
    const datas = await jsonData();
    const { id } = await params;
    const detailsData = datas.find(data => data.id == id);
    console.log(detailsData)

    return (
        <div>
         <Card className="max-w-6xl mx-auto rounded-3xl shadow-lg border border-orange-100 p-4 md:p-6 my-5">
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-0">

      
        <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden bg-orange-50">
          <Image
            src={detailsData.image}
            alt="product"
            fill
            className="object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>

       
        <div className="space-y-5">
          
          <p className="text-lg font-medium text-orange-500">
            Brand: <span className="text-slate-700">{detailsData.brand}</span>
          </p>

          
          <h2 className="text-4xl font-bold text-slate-900">
            {detailsData.name}
          </h2>

          
          <p className="text-gray-500 leading-8 text-lg">
            {detailsData.description}
          </p>

       
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <h3 className="text-3xl font-bold text-orange-500">
              ${detailsData.price}
            </h3>

            <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full w-fit">
              <FaStar className="text-yellow-400 text-lg" />
              <span className="font-semibold text-slate-700">{detailsData.rating}</span>
            </div>
          </div>

         
          <div className="flex flex-col sm:flex-row gap-4 pt-3">
            <Button
              size="lg"
              radius="full"
              className="bg-orange-500 text-white px-8 font-semibold"
            >
              Buy Now
            </Button>

            <Button
              size="lg"
              radius="full"
              variant="bordered"
              className="border-2 border-slate-900 text-slate-900 px-8 font-semibold hover:bg-slate-900 hover:text-white"
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
        </div>
    );
};

export default detailsPage;