import Image from "next/image";
import Link from "next/link";

interface cardProps {
    category: string;
    image: string;
    link: string;
}

export const CategoryCard = ({ category, image, link }: cardProps) => {
    return (
        <Link href={link}>
            <div
                className="text-white w-full h-[370px] relative overflow-hidden hover:mt-[-8px] duration-300 rounded-[3rem]"
            >
                <Image className="object-cover h-auto w-auto" src={image} alt={`Imagem da categoria ${category}`} fill />
                <div className="absolute h-full w-full cursor-pointer">
                    <div className="flex flex-col justify-center items-center h-full text-center gap-3">
                        <h4 className="text-[28px] xl:text-2xl font-bold">{category}</h4>
                        <button
                            className="border border-white text-white rounded-3xl text-sm pb-2 pt-3 px-5 duration-500 hover:bg-hisense hover:border-hisense"
                        >
                            Saiba mais
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};
