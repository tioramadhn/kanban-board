import { useContext, useEffect, useState } from "react";
import CirclePlusIcon from "../assets/icons/CirclePlusIcon";
import Label from "./Label";
import TaskItem from "./TaskItem";
import { TODO_URL } from "../utils/apiEndpoint";
import axios from "axios";
import { AuthContext } from "../provider/authProvider";
import NoTask from "./NoTask";
import Modal from "./Modal";
import Input from "./Input";
import Button from "./Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { taskItemSchema } from "../validation/taskItemSchema";

export interface iGroupTask {
  id?: number;
  title?: string;
  description?: string;
}

interface iTaskItem {
  name: string;
  progress_percentage: number;
}

export default function GroupTask({
  id = 0,
  title = "Title",
  description = "This is description",
}: iGroupTask) {
  const { auth } = useContext<any>(AuthContext);
  const [taskItems, setTaskItem] = useState<any>(null);
  const [openModal, setOpenModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iTaskItem>({ resolver: yupResolver(taskItemSchema) });

  const getTaskItem = (id: number) => {
    axios
      .get(`${TODO_URL}/${id}/items`, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      })
      .then((res) => setTaskItem(res.data));
  };

  useEffect(() => {
    getTaskItem(id);
  }, []);

  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const onSubmitAddTaskItem: SubmitHandler<iTaskItem> = (data) => {
    console.log(data);
  };

  return (
    <div className="p-4 rounded border border-primary-main bg-primary-surface flex flex-col gap-2 w-[294px]">
      <Label>{title}</Label>
      <p className="s-bold text-neutral-90">{description}</p>
      {taskItems?.length > 0 ? (
        taskItems.map((item: any) => (
          <TaskItem
            key={item.id}
            name={item.name}
            percentage={item.progress_percentage}
          />
        ))
      ) : (
        <NoTask />
      )}
      <div
        className="flex gap-[5px] items-center cursor-pointer"
        onClick={handleModal}
      >
        <CirclePlusIcon />
        <span className="s-regular">New Task</span>
      </div>
      {openModal && (
        <Modal handleOpen={setOpenModal}>
          <h1 className="xl-bold mb-6">Add New Group</h1>
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmitAddTaskItem)}
          >
            <Input
              name="name"
              label={"Task Name"}
              placeholder="Enter your task name"
              type="text"
              key={"modal-group-task-name"}
              register={register("name")}
              error={errors.name?.message}
            />
            <Input
              name="percentage_progress"
              label={"Description"}
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
              <Button>Save Task</Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
