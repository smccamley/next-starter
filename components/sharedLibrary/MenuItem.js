import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Button from "./Button"
import menu from "./data/menu"
import Badge from "./Badge"

const MealContainerWrapper = styled.div`
  padding: 10px 10px 52px 10px;
  background: white;
  border-top: 1px solid #622f17;
  border-bottom: 1px solid #382116;
  border-radius: 2px;
  box-shadow: 0 0 10px -8px black;
  width: 90%;
  margin: 10px auto;
  max-width: 400px;
`

const MealContainer = styled.div`
  font-weight: 200;
  width: 90%;
  margin: 0 auto;
  font-size: 16px;
  max-width: 300px;
  h4 {
    font-weight: 300;
    font-size: 17px;
    margin-bottom: 3px;
    margin-top: 9px;
  }
  p {
    font-size: 13px;
    margin: 0px 0px 7px 0px;
  }
  .question {
    font-size: 13px;
    font-weight: 400;
    margin-right: 4px;
  }
  .answer {
    font-size: 13px;
  }
  .row {
    display: flex;
    justify-content: space-between;
  }
`

const Image = styled.div`
  height: 145px;
  width: 100%;
  background-size: cover;
  background-position: center;
`

export default ({
  id,
  title,
  description,
  spicy,
  tasty,
  addItem,
  price,
  removeItem,
  image,
  quantity = 0,
}) => {
  const disabled = quantity === 0 ? true : false
  return (
    <MealContainerWrapper>
      {image && <Image style={{ backgroundImage: `url(${image})` }} />}
      <MealContainer>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={"row"}>
          <div className={"column"} style={{ maxWidth: "160px" }}>
            <div>
              <span className={"question"}>Spicy:</span>
              <span className={"answer"}>{spicy}</span>
            </div>
            <div>
              <span className={"question"}>Tasty:</span>
              <span className={"answer"}>{tasty}</span>
            </div>
            <div>
              <span className={"answer"}>
                {quantity > 0 && (
                  <Badge className={"animated bounceIn"}>{quantity} x</Badge>
                )}
                £ {menu.priceToPounds(price)}
              </span>
            </div>
          </div>
          <div className={"column"} style={{ marginTop: "15px" }}>
            <Button
              full={true}
              icon={"plus"}
              color={"green"}
              onClick={() => addItem(id)}
              postion={"left"}
              style={{
                borderRadius: "10px 0px 0px 10px",
                padding: "10px",
                minWidth: "40px",
              }}
            >
              <FontAwesomeIcon icon={["fas", "plus-circle"]} />
            </Button>
            <Button
              full={true}
              color={"red"}
              onClick={() => removeItem(id)}
              postion={"right"}
              disabled={disabled}
              style={{
                borderRadius: "0px 10px 10px 0px",
                minWidth: "40px",
                padding: "10px",
              }}
            >
              <FontAwesomeIcon icon={["fas", "minus-circle"]} />
            </Button>
          </div>
        </div>
      </MealContainer>
    </MealContainerWrapper>
  )
}
