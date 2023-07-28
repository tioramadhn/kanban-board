export default function Modal({ children = "modal", handleOpen }: any) {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen z-[99999]">
      <div
        onClick={() => {
          handleOpen((prev: boolean) => !prev);
        }}
        className="absolute w-full h-full bg-neutral-90/50 z-[0] top-0 left-0 "
      ></div>
      <div className="p-6 rounded-[10px] shadow-modal bg-white w-[420px] modal-box absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[1]">
        {children}
      </div>
    </div>
  );
}
