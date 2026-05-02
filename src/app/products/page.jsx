import ProductCard from "@/component/ProductCard";
import jsonData from "@/jsonData";

const productsPage = async () => {
    const datas = await jsonData()
    return (
        <div>
            <h2 className="text-4xl text-left py-7 font-bold text-sky-400">All Products</h2>
        
            <div className="grid grid-cols-1  mx-22 lg:grid-cols-3 gap-4">
                {
                    datas.map(data => <ProductCard key={data.id} data={data}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default productsPage;