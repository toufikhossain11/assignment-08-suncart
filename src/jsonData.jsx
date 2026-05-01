
const jsonData = async() => {
    const res = await fetch(`https://assignment-08-suncart.vercel.app/data.json`)
    const data = await res.json()
    return data;
};

export default jsonData;