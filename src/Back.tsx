import React from 'react'

interface PropsI {
    size?: number
}

export const Back = (props:PropsI) => {

    const { size } = props

    let svgSize = !!size ? size : 32

    return (
        <svg xmlns='http://www.w3.org/2000/svg' width={svgSize} height={svgSize} viewBox='0 0 32 32' fill='none'>
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M22.7071 28.7071C22.3166 29.0976 21.6834 29.0976 21.2929 28.7071L9.29289 16.7071C8.90237 16.3166 8.90237 15.6834 9.29289 15.2929L21.2929 3.29289C21.6834 2.90237 22.3166 2.90237 22.7071 3.29289C23.0976 3.68342 23.0976 4.31658 22.7071 4.70711L11.4142 16L22.7071 27.2929C23.0976 27.6834 23.0976 28.3166 22.7071 28.7071Z'
                fill='#121212'
            />
        </svg>
    )
}