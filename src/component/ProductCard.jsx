import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ data }) => {
    return (
        <div>
            <div className="p-3 w-76  h-106  bg-white border border-orange-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all text-center rounded-xl">
                <Link href={`/products/${data.id}`} className="relative w-full aspect-square">
                    <Image
                        src={data.image}
                        width={300}
                        height={100}
                        alt={data.name}
                        className="object-cover rounded-xl"
                    />
                </Link>
                <div className="p-3">
                    <Link href={`/products/${data.id}`}>
                        <h2 className="font-bold text-xl text-slate-900">{data.name}</h2>
                    </Link>
                    <div className="grid grid-cols-2 items-center justify-between gap-14">
                        
                            <p className="text-orange-500 font-bold">$ {data.price}</p>
                       
                        <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full w-fit">
                            <FaStar className="text-yellow-400 text-lg" />
                            <span className="font-semibold text-slate-700">{data.rating}</span>
                        </div>

                    </div>
                    <div className="">
                        <Link href={`/products/${data.id}`}>
                            <button className="btn w-full border-0 bg-slate-900 hover:bg-orange-500 text-white">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;