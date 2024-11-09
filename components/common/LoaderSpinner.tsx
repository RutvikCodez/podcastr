import React from 'react' 
import {Loader} from 'lucide-react' 

const LoaderSpinner = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
        <Loader className="text-orange-1 animate-spin" size={30} />
    </div>
  )
}

export default LoaderSpinner