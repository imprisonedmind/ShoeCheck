import { Icon } from '@iconify/react';

const Highest = ({ setIsLowest, isLowest, isHighest, isMale }) => {


    if (isLowest) return (
        <div onClick={() => setIsLowest(!isLowest)} className={`flex bg-gray-700 h-14 w-full border-4 border-blue-500 my-auto rounded-2xl cursor-pointer`}>
            <div className="h-full w-1/4 p-4 text-blue-500 hover:text-red-500">
                <Icon icon="ic:baseline-filter-1" className="h-full w-full" />
            </div>
            <p className="h-max w-max my-auto">Lowest Price</p>
        </div>
    ); if (isHighest) return (
        <div onClick={() => setIsLowest(!isLowest)} className={`flex bg-gray-700 h-14 w-full opacity-50 my-auto rounded-2xl cursor-pointer pointer-events-none`}>
            <div className="h-full w-1/4 p-4 text-blue-500 hover:text-red-500">
                <Icon icon="ic:baseline-filter-1" className="h-full w-full" />
            </div>
            <p className="h-max w-max my-auto">Lowest Price</p>
        </div>
    ); else return (
        <div onClick={() => setIsLowest(!isLowest)} className={`flex bg-gray-700 h-14 w-full my-auto rounded-2xl cursor-pointer hover:bg-gray-600`}>
            <div className="h-full w-1/4 p-4 text-blue-500 hover:text-red-500">
                <Icon icon="ic:baseline-filter-1" className="h-full w-full" />
            </div>
            <p className="h-max w-max my-auto">Lowest Price</p>
        </div>
    )


}
export default Highest