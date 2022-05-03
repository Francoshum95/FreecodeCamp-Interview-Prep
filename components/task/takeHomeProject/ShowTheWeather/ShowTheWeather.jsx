import useShowTheWeather from "./useShowTheWeather"
import Image from 'next/image';


const tempConvert = (isCelsius, temp) => {
  return isCelsius ? `${Number.parseFloat(temp).toFixed(1)} °C` : `${(temp * 9/5 +32).toFixed(1)} °F`
}

export default function ShowTheWeather(){
  const {weather, isCelsius, isLoading, handleOnChangeTempFormat} = useShowTheWeather();
  const {city, country, description, temperature, h_temp, l_temp, image_url} = weather;


  return (
    <div className='w-[19rem] h-[7rem] bg-blue-400 rounded-lg box-border m-2 p-2 text-white '>
      {
        !isLoading || 
        Object.keys(weather).length > 0 ? (
          <>
            <div className='w-full h-[75%] flex justify-between ml-2'>
              <div className='w-full'>
                <h1 className='text-sm'>{`${country} ${city}`}</h1>
              </div>
              <h1 className='md:text-xl lg:text-2xl'>{tempConvert(isCelsius, temperature)}</h1>
              <div className='text-xs mr-2'>
                {
                  image_url &&
                    <Image
                    src={image_url}
                    alt="weather"
                    width={25}
                    height={25}
                  />
                }
                <h2>{description}</h2>
                <div>
                  <h3 className='text-[10px]'>{`H:${tempConvert(isCelsius, h_temp)} L:${isCelsius, tempConvert(isCelsius, l_temp)}`}</h3>
                </div>
              </div>
            </div>
            <button
              onClick={()=>handleOnChangeTempFormat()}
              className='ml-1'
              >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
        </>
        ) : (
          <div>Loaidng ....</div>
        )
      }
    </div>
  )  
}