import { ReactNode } from "react";
import { TaskProvider } from "./tasks";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return <TaskProvider>{children}</TaskProvider>;
};

export default Providers;
