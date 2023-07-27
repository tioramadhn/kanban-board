import { PlusIcon } from "../assets/icons";
import { Toast } from "../lib/Toast";
import { AuthContext } from "../provider/authProvider";
import Button from "./Button";
import { useContext, useState } from "react";
import Modal from "./Modal";
import Input from "./Input";

export default function Header() {
  const { setAuth } = useContext<any>(AuthContext);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    localStorage.clear();
    setAuth(null);
    Toast.fire({
      icon: "success",
      title: "Logout successfuly",
    });
  };
  return (
    <div>
      <nav className="min-h-16 border-b px-5 py-[18px] flex justify-between">
        <div className="flex md:gap-[10px] md:flex-row flex-col md:items-center items-start">
          <span className="text-lg font-bold leading-7">Product Roadmap</span>
          <Button icon={<PlusIcon />} handleClick={() => setOpen(!open)}>
            Add New Group
          </Button>
        </div>
        <Button handleClick={handleClick} style="danger" variant="outlined">
          Logout
        </Button>
      </nav>
      {open && (
        <Modal handleOpen={setOpen}>
          <h1 className="xl-bold mb-6">Add New Group</h1>
          <form className="flex flex-col gap-5">
            <Input
              name="title"
              label={"Title"}
              placeholder="Enter your title"
              type="text"
              key={"modal-group-title"}
              register={""}
            />
            <Input
              name="desciption"
              label={"Description"}
              placeholder="Enter your desciption"
              type="text-area"
              key={"modal-group-desription"}
              register={""}
            />

            <div className="flex gap-[10px] justify-end">
              <Button style="default">Cancel</Button>
              <Button>Submit</Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
