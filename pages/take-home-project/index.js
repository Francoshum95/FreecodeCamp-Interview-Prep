import Head from 'next/head';
import Navbar from '/components/Navbar';
import Task from '/components/Task';
import taskHomeTaskDes from '/constants/taskHomeTaskDes';


export default function Menu(){
  return (
    <div className="menu-container">
      <Head>
        <title>FreeCodeCampe TakeHone Projext</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        path="/"
      />
      <div className='text-white mt-5'>
        <h1 className='text-xl font-bold text-center'>FreeCodeCampe - Take Home Project</h1>
      </div>
      <div className='w-full h-full flex items-center justify-center flex-col xl:grid xl:grid-cols-3 xl:gap-5 my-5 gap-5'>
        {
          taskHomeTaskDes.map(task => {
            return (
              <Task
                key={task.id}
                task={task}
              />
            )
          })
        }
      </div>
    </div>
  )
}