import PlusIcon from "../assets/icons/PlusIcon";
import { AuthContext } from "../provider/authProvider";
import Button from "./Button";
import { useContext } from "react";

export default function Header() {
  const { setAuth } = useContext<any>(AuthContext);
  const handleClick = () => {
    localStorage.clear();
    setAuth(null);
  };
  return (
    <nav className="min-h-16 border-b px-5 py-[18px] flex justify-between">
      <div className="flex md:gap-[10px] md:flex-row flex-col md:items-center items-start">
        <span className="text-lg font-bold leading-7">Product Roadmap</span>
        <Button icon={<PlusIcon />}>Add New Group</Button>
      </div>
      <Button handleClick={handleClick} style="danger" variant="outlined">
        Logout
      </Button>
    </nav>
  );
}
