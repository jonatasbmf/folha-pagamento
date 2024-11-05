
import ReactLoading from 'react-loading';

export default function Loading() {
    return (
        <div className="z-50 absolute top-0 left-0 right-0 bottom-0 
            h-full w-full 
            opacity-70 bg-gray-500 
            flex items-center justify-center">

            <ReactLoading type='cylon' color='white' width={250} height={250} />
        </div>
    )
}   