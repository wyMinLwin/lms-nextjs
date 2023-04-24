import React from 'react'

type LayoutPropsType = {
    children: React.ReactNode;
}

function layout(props:LayoutPropsType) {
  return (
    <div className='w-screen h-screen grid grid-flow-row bg-red-500 overflow-x-scroll hide-scrollbar'>
        <section className='grid grid-flow-row m-auto bg-white p-8 rounded-sm'>
            {props.children}
        </section>
    </div>
  )
}

export default layout