import React from 'react'
import { useNavigate } from 'react-router';
import PrevPageComponent from '../../components/TemplatesComponents/PrevPageComponent';

const PrevPage = () => {
  const redirectTo = useNavigate();

  const prevPage = () => {
    const localName = window.location.href.replace(window.location.origin, "").split(/[/?]/)
    localName.pop()
    redirectTo(localName.join("/") === "/catalog" ? "/" : localName.join("/"))
  }
  return (
    <PrevPageComponent prevPage={prevPage}/>
  )
}

export default PrevPage