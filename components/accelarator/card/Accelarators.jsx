"use client"
import { IoIosSearch } from "react-icons/io";
import Card from "./Card";

export default function Accelarators({ cards }) {
    // console.log("cards:", cards)
    return (
        <div className="items-stretch bg-stone-900 flex flex-col px-28 py-12 max-md:px-5">
            <div className="items-stretch flex justify-between gap-5 mt-8  max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
                <div className="justify-center items-stretch border bg-neutral-900 flex grow basis-[0%] flex-col px-5 py-5 rounded-xl border-solid border-white border-opacity-10 max-md:max-w-full">
                    <div className="justify-between items-stretch flex gap-5 max-md:max-w-full max-md:flex-wrap">
                        <input id="card-search-input" placeholder="Search Keywords" className="text-white bg-transparent outline-none w-full placeholder:text-opacity-50 text-base leading-6" />
                        <label htmlFor="card-search-input" className="cursor-pointer">
                            <IoIosSearch className="h-6 w-6" />
                        </label>
                    </div>
                </div>
                <div className="justify-between items-stretch border bg-stone-900 flex gap-2.5 px-5 py-2.5 rounded-xl border-solid border-white border-opacity-10">
                    <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
                        <div className="text-white text-sm leading-6">Industry</div>
                        <div className="text-white text-opacity-90 text-lg font-medium leading-6 whitespace-nowrap mt-1.5">
                            Automobile
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/baedb3fd6b1ae068247ebf896e6525923c6ccc07fa3c57d09e05e8bc45052c89?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
                <div className="justify-between items-stretch border bg-stone-900 flex gap-2 px-5 py-2.5 rounded-xl border-solid border-white border-opacity-10">
                    <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
                        <div className="text-white text-sm leading-6 whitespace-nowrap">
                            Technology
                        </div>
                        <div className="text-white text-opacity-90 text-lg font-medium leading-6 whitespace-nowrap mt-1.5">
                            Automobile
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/804d1457dd6f901f8908c8893c31c40ccf71a08470fbd7cdea451e03a2890065?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
                <div className="justify-between items-stretch border bg-stone-900 flex gap-px px-5 py-2.5 rounded-xl border-solid border-white border-opacity-10">
                    <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
                        <div className="text-white text-sm leading-6">Sort By</div>
                        <div className="text-white text-opacity-90 text-lg font-medium leading-6 whitespace-nowrap mt-1.5">
                            Newest First
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/32cdb007148beef5c6a6a9cdd093e5c317dba0512ed3eb83a8ed3b534cee613f?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
            </div>
            <div className="bg-white bg-opacity-10 shrink-0 max-w-full h-px mt-10  max-md:mr-2.5" />
            <div className="text-white text-3xl font-medium leading-10 mt-10  max-md:max-w-full max-md:mr-2.5">
                Browse Accelerators
            </div>
            <div className="m-0  mt-10 max-md:max-w-full max-md:mr-2.5">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    {cards.map(({ id, url, cardtitle, title, description, industry, technology, tags }) => (
                        <Card key={id} url={url} cardTitle={cardtitle} description={description} industry={industry} technology={technology} tags={tags} />
                    ))}
                </div>
            </div>
        </div>
    );
}


