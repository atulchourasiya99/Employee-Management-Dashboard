import React from 'react'

const AcceptTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.TaskCategory}</h3>
                <h4 className='text-sm'>{data.TaskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl semibold'>{data.TaskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.TaskDescription}
            </p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 text-sm px-2 py-1'>Mark as Completed</button>
                <button className='bg-red-500 text-sm px-2 py-1'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask
