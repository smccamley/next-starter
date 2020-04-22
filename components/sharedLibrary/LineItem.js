import styled from "styled-components"
import menu from "./data/menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LineItem = styled.div`
  font-family: Lato;
  border-bottom: 4px solid grey;
  position: relative;
  .column {
    display: flex;
    flex-direction: column;
  }
  .row {
    padding: 10px;
    font-size: 13px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: white;
  }
  .add-space-for-remove-button {
    margin-left: 30px;
  }
  .type {
    margin-right: 5px;
  }
  .item {
    margin-bottom: 5px;
  }
  .button-container {
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    padding-bottom: 20px;
  }
  .total {
    font-size: 14px;
  }
  .right {
    display: flex;
    text-align: right;
    justify-content: flex-end;
  }
`

const DeleteWrapper = styled.div`
  position: absolute;
  top: 0;
  display: block;
  left: 0px;
  padding: 11px 10px 11px 15px;
`

export default ({ item, id, remove = null }) => {
  const enableRemove = typeof remove === "function" ? true : false
  const removeMeal = () => {
    remove(id)
  }
  return (
    <LineItem>
      <div className={"row"}>
        {enableRemove && (
          <DeleteWrapper onClick={removeMeal}>
            <FontAwesomeIcon color={"red"} icon={["fas", "times-circle"]} />
          </DeleteWrapper>
        )}
        <div className={enableRemove ? "add-space-for-remove-button" : ""}>
          <span className={"type"}>Item,</span>
          <span className={"name"}>{item.title}</span>
        </div>
        <div className={"total"}>£{menu.priceToPounds(item.price)}</div>
      </div>
    </LineItem>
  )
}
