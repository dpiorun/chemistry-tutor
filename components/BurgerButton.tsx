interface Props {
  onClick: () => void;
  open: boolean;
}

const BurgerButton = ({ onClick, open }: Props) => (
  <div className="hover:cursor-pointer" onClick={onClick}>
    <div className="space-y-2">
      <div
        className={[
          "h-0.5",
          "w-8",
          "bg-slate-950",
          open ? "translate-y-[5px] rotate-45" : "",
          "transition-all",
        ].join(" ")}
      ></div>
      <div
        className={[
          "h-0.5",
          "w-8",
          "bg-slate-950",
          open ? "hidden" : "",
          "transition-all",
        ].join(" ")}
      ></div>
      <div
        className={[
          "h-0.5",
          "w-8",
          "bg-slate-950",
          open ? "translate-y-[-5px] rotate-[-45deg]" : "",
          "transition-all",
        ].join(" ")}
      ></div>
    </div>
  </div>
);

export default BurgerButton;
