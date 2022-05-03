import useTwitchJsonAPI from "./useTwitchJsonAPI";
import Link from "next/link"
import Image from "next/image";

const buttonTypes = ['All', 'Online', 'Offline'];


export default function TwitchJsonAPI(){
  const {isLoading, type, handleOnChange, switchData} = useTwitchJsonAPI();

  return(
    <div className="flex w-full h-full">
      <div className="w-[20rem] h-[15rem] rounded-lg box-border text-sm text-white">
        <div className="flex w-[10rem] mb-3 justify-between">
          {
            buttonTypes.map(buttonType => {
              return (
                <button
                onClick={() => handleOnChange(buttonType)}
                className={`${type === buttonType ? 'cursor-auto' : 'hover:opacity-50 transition-opacity duration-200'}`}
                >
                  <div className="flex items-center text-xs">
                    <div className="w-3 h-3 rounded-full bg-gray-700 mr-1"></div>
                    <div>{buttonType}</div>
                  </div>
                </button>
              )
            })
          }
        </div>
        { !isLoading && switchData.length >0  ?
            switchData.filter(items => {
              if(items.status === type){
                return items
              } else if (type === 'All'){
                return items
              }
            }).map((item => {
              return (
                <div className={`${item.status === 'Online' ? 'bg-green-500': 'bg-red-500'} 
                  w-full text-[10px] mb-[1px] p-2 rounded-md`} key={item.url}>
                  <Link
                    href={item.url}>
                    <a target="_blank">
                      <div className="flex hover:opacity-50 justify-between item-center transition-opacity duration-200">
                        <div className="w-[35%] flex justify-between">
                          <Image 
                            src={item.icon}
                            alt="icon"
                            width={20}
                            height={20}
                            className="rounded-md"
                          />
                          <h1>{item.name}</h1>
                        </div>
                        <h1>{item.game}</h1>
                      </div>
                    </a>
                  </Link>
                </div>
              )
            })) : (
            <div className="flex item-center space-x-1 text-white">
              <svg fill='none' className="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
                <path clipRule='evenodd'
                  d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                  fill='currentColor' fillRule='evenodd' />
              </svg>
              <div>Loading...</div>
          </div>
          )
        }
      </div>
    </div>
  )
}