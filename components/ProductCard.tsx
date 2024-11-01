import Image from "next/image"

interface ProductProps {
    product: Product
}

function ProductCard({ product }: ProductProps) {
    return (
        <div className="relative rounded-lg xl:rounded-2xl w-full h-[87%] overflow-hidden duration-300 hover:lg:shadow-xl">
            <Image className="object-cover" src={product.thumbnail} alt={`Imagem da televisão ${product.shortname}`} fill />
            <div className="absolute w-full h-full text-white bg-black duration-500 bg-opacity-50 hover:bg-opacity-70  cursor-pointer flex flex-col gap-5 items-center justify-center">
                <h4 className="text-[28px] xl:text-2xl font-bold">{product.shortname}</h4>
                <button className="border border-white text-white rounded-3xl text-sm pb-2 pt-3 px-5 duration-500 hover:bg-hisense hover:border-hisense">Mais detalhes</button>
            </div>
        </div>
    )
}

export default ProductCard