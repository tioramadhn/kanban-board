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
import { Toast } from "../lib/Toast";
import useSWR from "swr";
import { GroupContext } from "../provider/groupContext";
import TaskProvider from "../provider/taskProvider";
import CloseIcon from "../assets/icons/CloseIcon";

export interface iGroupTask {
  currentId?: number;
  prevId?: number;
  nextId?: number;
  title?: string;
  description?: string;
}

export interface iTaskItem {
  name: string;
  progress_percentage: number;
}

export default function GroupTask({
  currentId,
  prevId,
  nextId,
  title = "Title",
  description = "This is description",
}: iGroupTask) {
  const { auth } = useContext<any>(AuthContext);
  const { setGroupId } = useContext<any>(GroupContext);
  const [taskItems, setTaskItem] = useState<any>(null);
  const [openModal, setOpenModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iTaskItem>({ resolver: yupResolver(taskItemSchema) });

  const fetcher = (url: string) =>
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      })
      .then((res) => res.data);

  const { data, mutate } = useSWR(`${TODO_URL}/${currentId}/items`, fetcher);

  useEffect(() => {
    if (data) {
      setTaskItem(data);
      setGroupId({ currentId, prevId, nextId });
    }
  }, [data]);

  const handleModal = () => {
    setOpenModal((prev) => !prev);
    reset();
  };

  const onSubmitAddTaskItem: SubmitHandler<iTaskItem> = (data) => {
    axios
      .post(`${TODO_URL}/${currentId}/items`, data, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      })
      .then(() => {
        mutate();
        handleModal();
        Toast.fire({
          icon: "success",
          title: "Add Task Item Success",
        });
      });
  };

  return (
    <div className="p-4 rounded border border-primary-main bg-primary-surface flex flex-col gap-2 w-[294px]">
      <Label>{title}</Label>
      <p className="s-bold text-neutral-90">{description}</p>
      {taskItems?.length > 0 ? (
        taskItems.map((item: any) => (
          <TaskProvider key={item.id}>
            <TaskItem
              id={item.id}
              name={item.name}
              percentage={item.progress_percentage}
              handleEdit={""}
              handleDelete={""}
            />
          </TaskProvider>
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
          <div className="flex justify-between">
            <h1 className="xl-bold mb-6">Create Task</h1>
            <span className="cursor-pointer" onClick={handleModal}>
              <CloseIcon />
            </span>
          </div>
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmitAddTaskItem)}
            noValidate
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
