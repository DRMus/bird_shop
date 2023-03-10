import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import CatalogPageComponent from '../../components/CatalogComponents/CatalogPageComponent'
import { IShopItemTag } from '../../interfaces/shopMenu'
import { IRootReducer } from '../../redux'
import { getCategoriesRedux } from '../../redux/selectors/apiCategory.selectors'

const CatalogPage = () => {
  
  const catalogs = useSelector<IRootReducer, IShopItemTag[]>(getCategoriesRedux);

  useEffect(() => {
    
  }, [catalogs])
  
  return (
    <CatalogPageComponent catalogs={catalogs}/>
  )
}

export default CatalogPage