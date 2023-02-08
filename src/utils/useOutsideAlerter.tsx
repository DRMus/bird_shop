import { useEffect } from "react";

export default function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>, toggleVisible: (state: boolean) => void) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        toggleVisible(false)
      } else {
        toggleVisible(true)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}