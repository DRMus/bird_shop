import React, { useState } from 'react'
import ShopMenuItemComponent from '../../../components/HomeComponents/HeaderComponents/ShopMenuItemComponent'
import { IShopItem } from '../../../interfaces/shopMenu'

interface Props {
  item: IShopItem;
}

const ShopMenuItem = (props: Props) => {
  return (
    <ShopMenuItemComponent item={props.item}/>
  )
}

export default ShopMenuItem