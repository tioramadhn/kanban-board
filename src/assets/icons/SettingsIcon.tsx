import { useContext, useEffect, useState } from "react";
import ListMenu from "../../components/ListMenu";
import { SettingsContext } from "../../provider/settingsProvider";

export default function SettingsIcon({ open, handleOpen }: any) {
  const { close } = useContext<any>(SettingsContext);
  useEffect(() => {
    console.log("hai");
  }, [open]);

  return (
    <div className="setting-box relative">
      <svg
        onClick={() => {
          handleOpen(!open);
        }}
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 hover:bg-neutral-30 rounded cursor-pointer ml-[26px]"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
          stroke="#757575"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
          stroke="#757575"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
          stroke="#757575"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {open && !close && <ListMenu />}
    </div>
  );
}
