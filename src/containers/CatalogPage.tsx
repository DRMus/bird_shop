import React from 'react'
import { useNavigate } from 'react-router'
import CatalogPageComponent from '../components/CatalogComponents/CatalogPageComponent'

const CatalogPage = () => {
  const redirectTo = useNavigate();

  const prevPage = () => {
    const localName = window.location.href.replace(window.location.origin, "").split(/[/?]/)
    localName.pop()
    redirectTo(localName.join("/") === "/catalog" ? "/" : localName.join("/"))
  }
  
  return (
    <CatalogPageComponent prevPage={prevPage}/>
  )
}

export default CatalogPage