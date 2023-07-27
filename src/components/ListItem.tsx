interface iMenu {
  icon: JSX.Element;
  name: string;
}
export default function ListItem({ menu }: { menu?: iMenu }) {
  const isDeleteMenu = menu?.name == "Delete";
  return (
    <div className="px-4 flex gap-4 h-9 items-center cursor-pointer group">
      {menu?.icon}
      <span
        className={`${
          isDeleteMenu
            ? "group-hover:text-danger-main"
            : "group-hover:text-primary-main"
        } font-[600] text-sm leading-6 tracking-[0.2px]`}
      >
        {menu?.name}
      </span>
    </div>
  );
}
