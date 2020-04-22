import styled from "styled-components"
import menu from "./data/menu"
import Button from "./Button"

const Header = styled.div`
  padding: 10px 10px 10px 35px;
  background-color: black;
  color: white;
  font-size: 15px;
`
const MealLineItem = styled.div`
  font-family: Luminari;
  border-bottom: 4px solid grey;
  .column {
    display: flex;
    flex-direction: column;
  }
  .row {
    padding: 10px;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .type {
    margin-right: 7px;
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
    font-size: 22px;
  }
  .right {
    display: flex;
    text-align: right;
    justify-content: flex-end;
  }
`

export default ({ meal, id, remove, disableRemove = false }) => {
  const removeMeal = () => {
    remove(id)
  }
  return (
    <MealLineItem>
      <Header>Meal {id + 1}</Header>
      <div className={"row"}>
        <div className={"column"}>
          <div className={"item"}>
            <span className={"type"}>Burger,</span>
            <span className={"name"}>
              {menu.getItem(meal.burger).title.replace("Burger", "")}
            </span>
          </div>
          <div className={"item"}>
            <span className={"type"}>Side,</span>
            <span className={"name"}>{menu.getItem(meal.side).title}</span>
          </div>
          <div className={"item"}>
            <span className={"type"}>Drink,</span>
            <span className={"name"}>{menu.getItem(meal.drink).title}</span>
          </div>
        </div>
        <div className={"column right"}>
          <div>total</div>
          <div className={"total"}>£{meal.price}</div>
        </div>
      </div>
      {!disableRemove && (
        <div className={"button-container"}>
          <Button color={"red"} onClick={removeMeal}>
            Remove Meal
          </Button>
        </div>
      )}
    </MealLineItem>
  )
}
