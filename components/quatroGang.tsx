import Image from "next/image";
const Quatro = () => {
return(
    <div className="grid-cols-2 grid-rows-2">
        <div className=" max-h-[640px] w-fit">
            <div className=" bg-gray-100 grid-flow-col rounded-xl w-xl h-[630px] mb-5  py-7 text-black text-xl">
            </div>
            <div className=" bg-gray-100 grid-flow-col rounded-xl w-xl h-[630px] mb-5  py-7 text-black text-xl">
            </div>
        </div>
        <div>
            <div className=" bg-gray-100 grid-flow-col rounded-xl w-xl h-[630px] mb-5  py-7 text-black text-xl">
            </div>
            <div className=" bg-gray-100 grid-flow-col rounded-xl w-xl h-[630px] mb-5  py-7 text-black text-xl">
            </div>
        </div>
    </div>
    )
}
export default Quatro;