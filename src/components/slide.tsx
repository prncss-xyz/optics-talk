import { ReactNode, useCallback, useEffect, useMemo, useRef } from "react";
import { Box } from "../../styled-system/jsx";
import { state, useMainStore } from "./mainStore";

const appendSlide = state.prop("slides");

interface ISlide {
  ref: React.RefObject<HTMLDivElement>;
}

export function Slide({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const append = useMainStore.modify(
    appendSlide,
    useCallback((slides) => (slides.push({ ref }), slides), [])
  );
  const find = useMemo(
    () => state.prop("slides").find(({ ref: ref_ }: ISlide) => ref === ref_),
    []
  );
  const remove = useMainStore.remove(find);
  useEffect(() => (append(), remove), [append, remove]);

  return (
    <Box ref={ref} minHeight="100vh">
      {children}
    </Box>
  );
}
