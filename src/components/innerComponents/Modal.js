import { AiOutlineClose } from "react-icons/ai";
import { Logo } from "../../assets/import";
import '../gradient.css';

const Modal = ({ name, onClose, cover, description }) => {
  return (
    <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center">
      <div className="lg:w-[700px] xs:w-full sm:w-[450px] max-w-full md:h-[500px] h-[600px] bg-white rounded-xl p-4 flex flex-col relative">
        <div className="flex justify-between my-2">
          <div className="w-10 h-10">
            <img src={Logo} alt="logo"/>
          </div>
          <AiOutlineClose
            className="text-3xl text-red-600 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="md:mt-[30px] mt-[10px]">
            <h1 className="text-center text-[25px] gradient-text md:text-[30px] font-bold">{name}</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-5 md:gap-y-0 md:gap-x-10">
            <div className="rounded-full basis-1/2">
                <img src={cover} alt="cover" className="rounded-full w-60 h-60 md:h-80 md:w-80"/>
            </div>
            <div className="basis-1/2 text-[13px] md:text-[15px]">
                <p>{description}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;








        // <h4 className="my-2 text-gray-500">{name}</h4>
        // <div className="flex justify-start items-center gap-x-2">
        //   <PiBookOpenTextLight className="text-red-300 text-2xl" />
        //   <h2 className="my-1">{book.title}</h2>
        // </div>
        // <div className="flex justify-start items-center gap-x-2">
        //   <BiUserCircle className="text-red-300 text-2xl" />
        //   <h2 className="my-1">{book.author}</h2>
        // </div>
        // <p className="mt-4">Anything You want to show</p>
        // <p className="my-2">{description}</p>