import { format } from "date-fns";
import prismadb from "@/lib/prismadb";
import { ColorClient } from "./_components/client";
import { ColorColumn } from "./_components/columns";

const ColorsPage = async ({ params }: { params: { storeId: string } }) => {
  const colors = await prismadb.eComColor.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedColorss: ColorColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do yyyy"),
  }));

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-6">
        <ColorClient data={formattedColorss} />
      </div>
    </div>
  );
};

export default ColorsPage;
