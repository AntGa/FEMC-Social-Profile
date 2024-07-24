import React from 'react'

export const Button = ({text}: {text: string}) => {
  return (
    <button className='w-[305px] h-[44px] bg-[#333333] rounded-lg text-white'>{text}</button>
  )
}
