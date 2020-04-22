import { connect } from "react-redux"
import styled from "styled-components"
import Link from "next/link"

const ActiveOrderInfoBox = styled.div`
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  background-color: white;
  position: fixed;
  height: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top: 2px solid grey;
  box-shadow: 0px 0px 6px grey;
  text-align: center;
  font-family: Lato;
  .title {
    font-size: 16px;
    color: #333333;
  }
  .subtitle {
    font-size: 12px;
    color: #333333;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  img {
    transform: rotate(180deg);
    height: 20px;
    position: relative;
    right: -30px;
  }
`

const DeliveryDetails = ({ order }) => {
  if (order.state !== "paid") return null
  return (
    <Link href="/OrderComplete">
      <a>
        <ActiveOrderInfoBox>
          <div>
            <span className="title">You have an active order</span>
            <span className="subtitle">Tap to see order details</span>
          </div>
          <img src="/back.png" />
        </ActiveOrderInfoBox>
      </a>
    </Link>
  )
}

export default connect((state) => ({
  order: state.order,
}))(DeliveryDetails)
