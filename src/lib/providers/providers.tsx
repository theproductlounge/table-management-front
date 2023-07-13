"use client";

import { ReduxProvider } from "./redux,provider";
import { ThemeRegistry } from "./mui-provider/theme.provider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeRegistry>
      <ReduxProvider>{children}</ReduxProvider>
    </ThemeRegistry>
  );
};