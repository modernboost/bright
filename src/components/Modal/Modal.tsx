import { IconX } from "@tabler/icons-react";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ModalContext = createContext(false);

export default function Modal({
  children,
  open = false,
  onChange = () => {},
  className,
  ...restProps
}: {
  restProps?: HTMLElement;
  className?: string;
  open?: boolean;
  onChange: Function;
  children: React.ReactNode;
}) {
  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    onChange(isOpen);
  }, [isOpen]);
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <div
        onClick={() => {
          console.log("second");
          onChange();
        }}
        className={`modal-backdrop ${isOpen ? "" : "hidden"} `}
      >
        <div
          onClick={e => {
            e.stopPropagation();
          }}
          className={`modal ${className}`}
          {...restProps}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
}

export function ModalHeader({
  children,
  className,
  ...restProps
}: {
  className: string;
  restProps: HTMLDivElement;
  children: ReactNode;
}) {
  const { setIsOpen } = useContext(ModalContext);
  return (
    <div className={` modal-header ${className}`} {...restProps}>
      {children}
      <IconX
        onClick={() => setIsOpen()}
        className="hover:text-red-500 hover:cursor-pointer"
      />
    </div>
  );
}
