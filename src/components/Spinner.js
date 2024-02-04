import { RotatingLines } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="#f05a22"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Spinner;
