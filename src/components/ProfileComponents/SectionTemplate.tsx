import React from 'react'

interface Props {
  children: React.ReactNode
  header: string
}

const SectionTemplate = ({children, header}: Props) => {
  return (
    <div className='profile-section flex flex-col gap-2'>
      <h3 className="profile-section--header text-mshadowgray text-lg">
        {header}
      </h3>
      <div className="shadow-xl bg-white rounded-xl px-8 py-6">
        {children}
      </div>
    </div>
  )
}

export default SectionTemplate