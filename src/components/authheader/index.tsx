import Image from "next/image";
import { IconBase } from "react-icons";
import { IoMdNotificationsOutline } from "react-icons/io";

const AuthHeader = () => {
  return (
    <div className="ml-10  flex justify-between mt-4">
      <div className="flex  gap-7">
        <Image
          className="rounded-full"
          src="/images/onaola.JPG"
          alt="Picture of the author"
          width={50}
          height={50}
        />
        <div>
        <h2>Hello,<br/> ONAOLAPO CHIDERA</h2>
        </div>
      </div>
      
      <IoMdNotificationsOutline className="h-10 w-16"/>
    </div>
  );
};

export default AuthHeader;
