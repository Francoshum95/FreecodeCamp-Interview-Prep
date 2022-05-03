import Navbar from './Navbar';
import { takeHomeCompoentsMap } from '/constants/taskHomeTask';

export default function Cards({name, number, path, type}) {

  let Components;

  if (type === 'home'){
    Components = takeHomeCompoentsMap[number]
  }

  return (
    <div className="flex flex-col justify-center items-center w-[20rem]">
      <Navbar path={path}/>
      <div className="bg-gray-500 rounded-md mt-12 mx-5 box-border h-[30rem]">
        <div className="p-4">
          <div className="flex w-full mt-5">
            <span className="text-2xl text-gray-700 font-bold ">{number}</span>
            <h1 className="text-center text-2xl font-bold w-full text-white">{name}</h1>
          </div>
          <div className="mt-5">
            <Components/>
          </div>
        </div>
      </div>
    </div>
  )
}
