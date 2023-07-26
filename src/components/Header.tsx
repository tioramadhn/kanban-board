import PlusIcon from "../assets/icons/PlusIcon";
import Button from "./Button";

export default function Header() {
  return (
    <nav className="min-h-16 border-b px-5 py-[18px] flex justify-between">
      <div className="flex md:gap-[10px] md:flex-row flex-col md:items-center items-start">
        <span className="text-lg font-bold leading-7">Product Roadmap</span>
        <Button icon={<PlusIcon />}>Add New Group</Button>
      </div>
      <Button style="danger" variant="outlined">
        Logout
      </Button>
    </nav>
  );
}
