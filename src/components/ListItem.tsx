import { useContext, useEffect, useState } from "react";
import { GroupContext } from "../provider/groupContext";
import { TaskContext } from "../provider/taskProvider";
import Modal from "./Modal";
import Input from "./Input";
import Button from "./Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { TODO_URL } from "../utils/apiEndpoint";
import { AuthContext } from "../provider/authProvider";
import { iTaskItem } from "./GroupTask";
import { taskItemSchema } from "../validation/taskItemSchema";
import { Toast } from "../lib/Toast";
import CloseIcon from "../assets/icons/CloseIcon";
import { mutate } from "swr";

export interface iMenu {
  icon: JSX.Element;
  name: string;
  action: "edit" | "delete" | "move-right" | "move-left";
}
export default function ListItem({
  menu,
  handleOpen,
}: {
  menu?: iMenu;
  handleOpen: any;
}) {
  const { auth } = useContext<any>(AuthContext);
  const { groupId } = useContext<any>(GroupContext);
  const { task } = useContext<any>(TaskContext);
  const [openModal, setOpenModal] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iTaskItem>({ resolver: yupResolver(taskItemSchema) });

  useEffect(() => {
    if (!openModal) {
      reset();
    }
  }, [openModal]);

  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const onSubmitEditTaskItem: SubmitHandler<iTaskItem> = async (data) => {
    console.log(data);
    try {
      await axios.patch(
        `${TODO_URL}/${groupId}/items/${task.id}`,
        { ...data, target_todo_id: groupId },
        {
          headers: {
            Authorization: `Bearer ${auth}`,
          },
        }
      );
      mutate(`${TODO_URL}/${groupId}/items`);
      Toast.fire({
        icon: "success",
        title: "Edit Task Item Success",
      });
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: "Edit Task Item failed",
      });
    } finally {
      handleModal();
    }
  };

  return (
    <div>
      <div
        className="px-4 flex gap-4 h-9 items-center cursor-pointer group"
        onClick={handleModal}
      >
        {menu?.icon}
        <span
          className={`${
            menu?.action == "delete"
              ? "group-hover:text-danger-main"
              : "group-hover:text-primary-main"
          } font-[600] text-sm leading-6 tracking-[0.2px]`}
        >
          {menu?.name}
        </span>
      </div>
      {openModal && menu?.action === "edit" && (
        <Modal handleOpen={setOpenModal}>
          <div className="flex justify-between">
            <h1 className="xl-bold mb-6">Edit Task</h1>
            <span className="cursor-pointer" onClick={handleModal}>
              <CloseIcon />
            </span>
          </div>
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmitEditTaskItem)}
            noValidate
          >
            <Input
              name="name"
              label={"Task Name"}
              placeholder="Enter your task name"
              type="text"
              key={"modal-group-task-name"}
              register={register("name")}
              defaultValue={task.name}
              error={errors.name?.message}
            />
            <Input
              name="progress_percentage"
              label={"Description"}
              defaultValue={task.percentage}
              placeholder="70%"
              width={"143px"}
              type="number"
              key={"modal-group-percentage_progress"}
              error={errors.progress_percentage?.message}
              register={register("progress_percentage")}
            />

            <div className="flex gap-[10px] justify-end">
              <Button style="default" handleClick={handleModal}>
                Cancel
              </Button>
              <Button>Save Change</Button>
            </div>
          </form>
        </Modal>
      )}
      {openModal && menu?.action === "delete" && (
        <Modal handleOpen={setOpenModal}>Delete</Modal>
      )}
    </div>
  );
}
