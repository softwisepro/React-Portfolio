import React from 'react'

const Bio = ({ bio }) => {
    return (
        <div className='pt-0 inline-block justify-between items-center p-16 rounded-lg shadow-inner border-double'>
            <h1
                className='flex text-5xl text-left py-5 font-bold text-gray-700'
            >
                <span className='flex'>Biography</span>
            </h1>
            <div>
                <div className='flex text-left text-gray-400'>
                    <div>
                        <p className='text-md max-w-md'>
                            { bio }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio