import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  background-color: #f8f8f8;
  font-size: 15px;
  padding: 10px;
  font-family: Lato;
  .cost {
    width: 100px;
    text-align: right;
    padding-right: 15px;
  }
`

const TableLineItem = ({ title, value, style }) => {
  return (
    <Container
      style={
        style === "light" ? { color: "black", backgroundColor: "white" } : null
      }
    >
      <div className={"title"}>{title}</div>
      <div className={"cost"}>£{value}</div>
    </Container>
  )
}

export default TableLineItem
