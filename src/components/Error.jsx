// eslint-disable-next-line react/prop-types
function ErrorMessage({ message }) {
  return (
    <div className="flex text-[28px] font-mono min-h-svh">
        <p className=" text-red-800">{message}</p>;
    </div>
  ) 
}

export default ErrorMessage;