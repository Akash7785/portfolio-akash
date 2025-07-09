import call from "../assets/call.svg";
import mail from "../assets/mail.svg";

const Contact = () => {
  return (
    <div className="border-t-1  border-gray-700">
      <div className="my-6">
        <h1 className="font-bold text-gray-400 tracking-widest mb-10 ">
          LET's DISCUSS YOUR PROJECT
        </h1>
        <div className="-mt-5">
          <div className="flex items-center gap-1">
            <img className="w-6 " src={mail} alt="" />
            <p className="text-gray-400">work.akash7785@gmail.com</p>
          </div>
          <div className="flex items-center">
            <img className="w-7  items-center" src={call} alt="" />
            <p className="text-gray-400">+91 7785940933</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
