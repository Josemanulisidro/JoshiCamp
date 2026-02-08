import logo from "../../../public/logo.svg"

const Loader = () =>{

    return(
    <div className="h-screen flex items-center justify-center bg-gray-400/30">
      <img
        src={logo}
        alt="Logo"
        className="w-40 animate-pulse"
      />
    </div>
    );
}

export default Loader;