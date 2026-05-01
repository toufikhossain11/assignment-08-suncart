import Image from "next/image";


const ProductCard = ({ data }) => {
    return (
        <div>
            <div className="card w-80 p-3  bg-white border border-orange-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all text-center">
                <div>
                    {/* <Image
                        src=""
                        alt="banner"
                        fill
                        loading="eager"
                        className="object-cover"
                    /> */}
                </div>
                <div className="card-body">
                    <h2 className="card-title text-slate-900">{data.name}</h2>
                    <div className="grid grid-cols-2 justify-between">
                        <p className="text-orange-500">{data.price}</p>
                        <p className="text-yellow-400">{data.rating}</p>
                    </div>
                    <div className="">
                        <button className="btn w-full border-0 bg-slate-900 hover:bg-orange-500 text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;