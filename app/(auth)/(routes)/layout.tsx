import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (userId !== null) {
    redirect("/");
  }

  console.log({ authuser: userId });

  return (
    <div className="flex items-center justify-center h-full">{children}</div>
  );
};

export default AuthLayout;
