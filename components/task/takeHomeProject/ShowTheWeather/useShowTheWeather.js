import {useState, useEffect} from 'react';

export default function useShowTheWeather(){
  const [weather, setWeather] = useState({});
  const [isCelsius, setIsCelsius] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const getLocation = async() => {
      setisLoading(true);

      try {
        const fetchlocation = await fetch('https://ipapi.co/json')
        const {latitude, longitude, city, country_name} = await fetchlocation.json()

        const fetchweather = await fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${latitude}&lon=${longitude}`)
        const {weather, main} = await fetchweather.json();

        setWeather({
          city, 
          country: country_name,
          description: weather[0].main,
          temperature: main.temp,
          h_temp: main.temp_max,
          l_temp: main.temp_min,
          image_url: weather[0]['icon']
        })

        setisLoading(false);
      } catch(error){
        console.error(error.message);
        setisLoading(false);
      }
    }

    getLocation();
  }, []);

  const handleOnChangeTempFormat = () => {
    setIsCelsius(!isCelsius)
  };


  return {
    weather,
    isCelsius,
    isLoading,
    handleOnChangeTempFormat
  }

}