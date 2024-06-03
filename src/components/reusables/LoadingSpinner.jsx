import "./Loading.css";

const LoadingSpinner = () => {
  return (
    <div className="justify-center items-center flex min-h-svh">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
