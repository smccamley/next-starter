import React from "react"
import styled from "styled-components"

import menu from "../components/data/menu"
import TableLineItem from "../components/TableLineItem"
import OrderDetailsWrapper from "../components/OrderDetailsWrapper"
import LineItem from "../components/LineItem"
import Badge from "./Badge"

const Header = styled.div`
  margin-top: 32px;
  padding: 10px 10px 10px 35px;
  background-color: black;
  color: white;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const OderId = styled(Badge)`
  font-size: 11px;
  border-radius: 3px;
  background-color: #4a96f3;
`

const OrderDetails = ({ order, removeItemFromOrder = null }) => {
  const totalCostOfMeals = menu.getItemsTotal(order.items)
  const totalOrderCost = menu.getTotal(order.items)
  return (
    <OrderDetailsWrapper>
      <Header>
        <span>My Order</span>
        {!!order.humanId && <OderId>id: {order.humanId}</OderId>}
      </Header>
      {order.items.map((item, i) => (
        <LineItem key={i} id={i} item={item} remove={removeItemFromOrder} />
      ))}
      <TableLineItem
        title={"food total"}
        value={menu.priceToPounds(totalCostOfMeals)}
      />
      <TableLineItem
        title={"delivery"}
        value={menu.priceToPounds(menu.deliveryPrice)}
      />
      <TableLineItem
        title={"order total"}
        style={"light"}
        value={menu.priceToPounds(totalOrderCost)}
      />
    </OrderDetailsWrapper>
  )
}

export default OrderDetails
