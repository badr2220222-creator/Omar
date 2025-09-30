import { useState, useEffect } from "react";

export function Breakpoint() {
  const [breakpoint, setBreakpoint] = useState<string>("");

  useEffect(() => {
    const calcBreakpoint = () => {
      if (window.innerWidth >= 1280) return setBreakpoint("xl");
      if (window.innerWidth >= 1024) return setBreakpoint("lg");
      if (window.innerWidth >= 768) return setBreakpoint("md");
      if (window.innerWidth >= 640) return setBreakpoint("sm");
      return setBreakpoint("xs");
    };

    calcBreakpoint();
    window.addEventListener("resize", calcBreakpoint);
    return () => window.removeEventListener("resize", calcBreakpoint);
  }, []);

  return breakpoint;
}
