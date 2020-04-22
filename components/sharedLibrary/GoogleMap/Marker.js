import React from "react"
import styled from "styled-components"
import Link from "next/link"

const Wrapper = styled.div`
  color: black;
  border-left: 4px solid #8c2116;
  background: #f6a6a4;
  width: 140px;
  height: 50px;
  border-radius: 4px;
  transform: "translate(-50%, -50%)";
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px 0 20px;
  flex-direction: column;
  font-size: 14px;
  text-decortion: underline;
`

const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #f6a6a4;
  margin-left: 30px;
  box-shadow: 10px 1px 10px grey;
`
const HelperWrapper = styled(Wrapper)`
  background: #a8f1c6;
  border-color: #21854e;
`
const HelperArrowDown = styled(ArrowDown)`
  border-top: 8px solid #a8f1c6;
`

const Marker = ({ title, user_id, type }) => {
  if (type === "helper") {
    return (
      <Link href={`/Contact/${user_id}`}>
        <a>
          <HelperWrapper>
            <div>{title}</div>
          </HelperWrapper>
          <HelperArrowDown />
        </a>
      </Link>
    )
  }
  return (
    <Link href={`/Contact/${user_id}`}>
      <a>
        <Wrapper>
          <div>{title}</div>
        </Wrapper>
        <ArrowDown />
      </a>
    </Link>
  )
}

export default Marker
