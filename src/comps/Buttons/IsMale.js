import { Icon } from '@iconify/react';

const IsMale = ({ setIsMale, isMale, isHighest, isLowest }) => {
    if (isMale) return (
        <div onClick={() => setIsMale(!isMale)} className={`flex bg-gray-700 h-14 w-full border-4 border-blue-500 my-auto rounded-2xl cursor-pointer`}>
            <div className="h-full w-1/4 p-4 text-blue-500 ">
                <Icon icon="icon-park-outline:male" className="h-full w-full" />
            </div>
            <p className="h-max w-max my-auto">Sort by Male</p>
        </div>
        // ); if () return (
        //     <div onClick={() => setIsMale(!isMale)} className={`flex bg-gray-700 h-14 w-full opacity-50 my-auto rounded-2xl cursor-pointer pointer-events-none`}>
        //         <div className="h-full w-1/4 p-4 text-blue-500 ">
        //             <Icon icon="icon-park-outline:male" className="h-full w-full" />
        //         </div>
        //         <p className="h-max w-max my-auto">Sort by Male</p>
        //     </div>
    ); else return (
        <div onClick={() => setIsMale(!isMale)} className={`flex bg-gray-700 h-14 w-full my-auto rounded-2xl cursor-pointer hover:bg-gray-600`}>
            <div className="h-full w-1/4 p-4 text-blue-500">
                <Icon icon="icon-park-outline:male" className="h-full w-full" />
            </div>
            <p className="h-max w-max my-auto">Sort by Male</p>
        </div>
    )
}

export default IsMale