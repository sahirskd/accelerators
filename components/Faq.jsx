import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
    return (
        <div className="justify-center items-center bg-zinc-900 flex flex-col px-28 py-12 max-md:px-5">
            <div className="flex w-full  flex-col my-8 max-md:max-w-full">
                <div className="text-white text-xl leading-8 uppercase self-start max-md:max-w-full">
                    FAQ’s
                </div>
                <div className="text-white text-5xl font-medium leading-[54.12px] mt-7 self-start max-md:max-w-full">
                    Navigating Your Queries
                </div>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="items-stretch self-stretch border flex flex-col justify-center mt-6 px-10 py-8 rounded-lg border-solid border-white border-opacity-10 max-md:max-w-full max-md:px-5">
                        <AccordionTrigger className="p-0 text-white text-2xl font-medium leading-8 grow max-md:max-w-full">
                            What can I expect from a Solution Accelerator?
                        </AccordionTrigger>
                        <AccordionContent className='mt-4'>
                            Solution Accelerators are designed to help you save hours of discovery, design, development and testing. Our goal is to jump-start your data and AI use cases by providing the right resources (notebooks, proven patterns and best practices). You can expect to go from idea to proof of concept (PoC) in as little as two weeks.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="items-stretch self-stretch border flex flex-col justify-center mt-6 px-10 py-8 rounded-lg border-solid border-white border-opacity-10 max-md:max-w-full max-md:px-5">
                        <AccordionTrigger className="p-0 text-white text-2xl font-medium leading-8 grow max-md:max-w-full">
                            What can I expect from a Solution Accelerator?
                        </AccordionTrigger>
                        <AccordionContent className='mt-4'>
                            Solution Accelerators are designed to help you save hours of discovery, design, development and testing. Our goal is to jump-start your data and AI use cases by providing the right resources (notebooks, proven patterns and best practices). You can expect to go from idea to proof of concept (PoC) in as little as two weeks.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="items-stretch self-stretch border flex flex-col justify-center mt-6 px-10 py-8 rounded-lg border-solid border-white border-opacity-10 max-md:max-w-full max-md:px-5">
                        <AccordionTrigger className="p-0 text-white text-2xl font-medium leading-8 grow max-md:max-w-full">
                            What can I expect from a Solution Accelerator?
                        </AccordionTrigger>
                        <AccordionContent className='mt-4'>
                            Solution Accelerators are designed to help you save hours of discovery, design, development and testing. Our goal is to jump-start your data and AI use cases by providing the right resources (notebooks, proven patterns and best practices). You can expect to go from idea to proof of concept (PoC) in as little as two weeks.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="items-stretch self-stretch border flex flex-col justify-center mt-6 px-10 py-8 rounded-lg border-solid border-white border-opacity-10 max-md:max-w-full max-md:px-5">
                        <AccordionTrigger className="p-0 text-white text-2xl font-medium leading-8 grow max-md:max-w-full">
                            What can I expect from a Solution Accelerator?
                        </AccordionTrigger>
                        <AccordionContent className='mt-4'>
                            Solution Accelerators are designed to help you save hours of discovery, design, development and testing. Our goal is to jump-start your data and AI use cases by providing the right resources (notebooks, proven patterns and best practices). You can expect to go from idea to proof of concept (PoC) in as little as two weeks.
                        </AccordionContent>
                    </AccordionItem>


                </Accordion>
            </div>
        </div>
    )
}
