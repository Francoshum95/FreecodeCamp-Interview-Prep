import { useEffect, useState} from 'react';


const defaultChannels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", 
"storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

export default function useTwitchJsonAPI(){
  const [switchData, setSwitchData] = useState([]);
  const [isLoading, setIsLoading ]= useState(false);
  const [type, setType] = useState("All");

  useEffect(() => {
    const getResponse = async() => {
      setIsLoading(true);
      let result = [];

      try {
        for (let i=0;i <defaultChannels.length; i++){
          const streamResponse = await fetch(`https://twitch-proxy.freecodecamp.rocks/twitch-api/streams/${defaultChannels[i]}`);
          const streamData = await streamResponse.json();
  
          const channelResponse = await fetch(`https://twitch-proxy.freecodecamp.rocks/twitch-api/channels/${defaultChannels[i]}`)
          const channelData = await channelResponse.json()
  
          let status;
          let game;
  
          if (streamData.stream === null){
            status = "Offline"
            game = "Offline"
          } else if (streamData.stream === undefined){
            status = "Offline"
            game = "Account suspended"
          } else {
            status = "Online"
            game = streamData.stream.game
          }
  
          result.push({
            name: channelData.display_name,
            icon: channelData.logo,
            status,
            game,
            url: channelData.url
          })
        }

        setSwitchData(result)
        setIsLoading(false);
        
      } catch(error){
        setIsLoading(false);
        console.error(error.message)
      }
    }

    getResponse()
  }, []);


  const handleOnChange = (type) => {
    setType(type);
  }

  return {
    isLoading,
    type,
    handleOnChange,
    switchData,
  }

}