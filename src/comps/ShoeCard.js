const ShoeCard = ({ dataArray }) => {
  return (
    <div className="flex flex-wrap justify-evenly h-full w-full text-white ">
      {dataArray.map((data, key) => {
        return (
          <div
            key={key}
            className="flex flex-wrap justify-center bg-gray-800 h-1/3 w-60 mx-1 my-5 py-2 rounded-3xl overflow-hidden cursor:pointer transform group hover:scale-105 transition duration-330 ease-in-out"
          >
            <img
              srcSet={data.ShoeImg}
              alt={data.ShoeName}
              className="bg-gray-100 h-4/6 w-11/12 object-cover rounded-3xl transform transitions duration-300 ease-in-out group-hover:scale-105"
            ></img>
            <h1 className="w-full text-center font-bold text-sm">
              {data.ShoeBrand}
            </h1>
            <p className="text-sm">{data.ShoeName}</p>
            <p className="w-full text-center font-bold text-xl text-red-600">
              R {data.ShoePrice}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ShoeCard;
