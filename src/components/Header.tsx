import { PlusIcon } from "../assets/icons";
import { Toast } from "../lib/Toast";
import { AuthContext } from "../provider/authProvider";
import Button from "./Button";
import { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import Input from "./Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { addGroupSchema } from "../validation/groupSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { TODO_URL } from "../utils/apiEndpoint";
import { useSWRConfig } from "swr";

interface iAddGroup {
  title: string;
  description: string;
}

export default function Header() {
  const { mutate } = useSWRConfig();
  const { auth, setAuth } = useContext<any>(AuthContext);
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iAddGroup>({ resolver: yupResolver(addGroupSchema) });

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open]);

  const handleClick = () => {
    localStorage.clear();
    setAuth(null);
    Toast.fire({
      icon: "success",
      title: "Logout successfuly",
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmitAddGroup: SubmitHandler<iAddGroup> = (data) => {
    axios
      .post(TODO_URL, data, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      })
      .then(() => {
        handleClose();
        Toast.fire({
          icon: "success",
          title: "Add Group Success",
        });
        mutate(TODO_URL);
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
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmitAddGroup)}
          >
            <Input
              name="title"
              label={"Title"}
              placeholder="Enter your title"
              type="text"
              key={"modal-group-title"}
              register={register("title")}
              error={errors.title?.message}
            />
            <Input
              name="desciption"
              label={"Description"}
              placeholder="Enter your desciption"
              type="text-area"
              key={"modal-group-desription"}
              error={errors.description?.message}
              register={register("description")}
            />

            <div className="flex gap-[10px] justify-end">
              <Button style="default" handleClick={handleClose}>
                Cancel
              </Button>
              <Button>Submit</Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
