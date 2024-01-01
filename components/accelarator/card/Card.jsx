import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { Badge } from "../../ui/badge";


const Card = ({ id, url, cardtitle, title, description, industry, technology, tags }) => {
    return (
        <div className="flex cursor-pointer flex-col items-stretch  max-md:w-full max-md:ml-0">
            <div className="items-stretch transition-all hover:border-[color:var(--Gradient,#1E8AF2)] bg-neutral-900 flex w-full grow flex-col mx-auto p-8 rounded-3xl border-2 border-solid max-md:mt-10 max-md:px-5">
                <div className="items-center justify-between flex gap-5">
                    <Image
                        loading="lazy"
                        width={200}
                        height={200}
                        alt=""
                        src="/accelarator-card-icon.svg"
                        className="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-white flex-1 text-base font-medium leading-6 my-auto">
                        {industry}
                    </div>

                    <MdArrowOutward size={24} />
                </div>

                <div className="text-white text-2xl font-medium leading-8 mt-5">
                    {cardtitle}
                </div>
                <div className="text-white text-base leading-6 mt-3 line-clamp-3">
                    {description}
                </div>
                <div className="justify-between items-stretch flex w-full gap-5 mt-5 pr-3 py-1.5">
                    <div className="items-stretch flex gap-3">
                        {tags.map((tag) => (
                            <Badge key={tag} variant={"outline"}>{tag}</Badge>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card