import { useEffect, useState } from "react/cjs/react.development";

const ShoeCard = ({ dataArray }) => {
  const [male, isMale] = useState(false)
  const [female, isFemale] = useState(false)


  return (
    <div className="flex flex-wrap justify-evenly h-full w-full text-white group">
      {dataArray.map((data, key) => {
        return (
          <a key={key} href={data.ShoeLink} rel="noreferrer" target="_blank"
            className="flex flex-wrap justify-center bg-gray-800 h-1/3 w-60 mx-1 my-5 py-2 rounded-3xl cursor:pointer transform-gpu transition duration-330 ease-in-out hover:scale-105">
            <img srcSet={data.ShoeImg} alt={data.ShoeName} className="bg-gray-100 h-4/6 w-11/12 object-cover rounded-3xl group-hover:scale-105 transform-gpu transition duration-330 ease-in-out"></img>
            <h1 className="w-full text-center font-bold text-sm">
              {data.ShoeBrand}
            </h1>
            <p className="text-sm">{data.ShoeName}</p>
            <p className="w-full text-center font-bold text-xl text-red-600 transform group-hover:scale-110"> R {data.ShoePrice} </p>
            <div className='absolute left-2 top-4 h-max w-max p-2 text-sm rounded-full transform scale-75 bg-green-500 '>
              <p>{data.ShoeProvider}</p>
            </div>
            <div className={`${data.ShoeSex === 'Male' ? 'bg-blue-300' : 'bg-pink-300'} absolute right-2 top-4 h-max w-max px-4 py-2 text-sm rounded-full transform scale-75`}>
              <p>{data.ShoeSex}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default ShoeCard;
