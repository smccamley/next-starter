import ScaleLoader from "react-spinners/ScaleLoader"
import styled from "styled-components"

const LoadingContainer = styled.div`
  display: flex;
  background: white;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`
export default () => {
  return (
    <LoadingContainer>
      <ScaleLoader size={15} color={"#000000"} loading={true} />
    </LoadingContainer>
  )
}
