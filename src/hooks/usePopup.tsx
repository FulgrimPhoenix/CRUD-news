import { store } from "@/store/store";
import { JSX, useCallback, useRef } from "react";
import { createRoot, Root } from "react-dom/client";
import { Provider } from "react-redux";

interface IPopup<T = unknown> {
  close: (result?: T) => void;
}

const useModalContext = () => {
  const modalRootRef = useRef<Root | null>(null);
  const modalContainerRef = useRef<HTMLDivElement | null>(null);

  const open = useCallback(
    <T,>(
      renderDialog: (props: IPopup<T>) => JSX.Element | Promise<JSX.Element>
    ): Promise<T> => {
      return new Promise<T>((resolve) => {
        if (modalContainerRef.current) {
          modalRootRef.current?.unmount();
          document.body.removeChild(modalContainerRef.current);
        }

        const modalContainer = document.createElement("div");
        modalContainer.style.position = "absolute";
        modalContainer.style.backgroundColor = "rgb(0, 0, 0, 0.9)";
        modalContainer.style.top = "-20px";
        modalContainer.style.width = "100%";
        modalContainer.style.minHeight = "100vh";
        modalContainer.style.display = "flex";
        modalContainerRef.current = modalContainer;
        document.body.appendChild(modalContainer);

        const close = (result?: T) => {
          if (modalRootRef.current) {
            modalRootRef.current.unmount();
            modalRootRef.current = null;
          }
          if (modalContainerRef.current) {
            document.body.removeChild(modalContainerRef.current);
            modalContainerRef.current = null;
          }
          resolve(result as T);
        };

        const root = createRoot(modalContainer);
        modalRootRef.current = root;

        const dialogContent = renderDialog({ close });

        if (dialogContent instanceof Promise) {
          dialogContent.then((resolvedContent) => {
            root.render(<Provider store={store}>{resolvedContent}</Provider>);
          });
        } else {
          root.render(<Provider store={store}>{dialogContent}</Provider>);
        }
      });
    },
    []
  );

  return { open };
};

export default useModalContext;
