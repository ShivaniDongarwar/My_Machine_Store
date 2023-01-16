import { ErrorMessage } from "@hookform/error-message";
const GetError = (err) =>{
 return( err.response && err.response.data && err.response.data.message
    ? err.response.data.message
    : err.message)
}
const ErrorMessages=(errors,name,messages)=>{
  console.log("error===>",errors)
  return <ErrorMessage
  errors={errors}
  name={name}
  render={({ messages }) => {
    console.log("messages", messages);
    return messages
      ? Object.entries(messages).map(([type, message]) => (
          <p key={type}>{message}</p>
        ))
      : null;
  }}
/>
}
export { GetError,ErrorMessages };