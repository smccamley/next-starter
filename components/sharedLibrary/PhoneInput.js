import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"

export default props => {
  return (
    <React.Fragment>
      <style>{`
        .PhoneInputInput{
          border: 2px solid #4b6272;
          padding: 4px;
          background: white;
          display: block;
          font-size: 16px;
          width: 100%;
        }
      `}</style>
      <PhoneInput {...props} />
    </React.Fragment>
  )
}
