import {format} from "date-fns"
import prismadb from "@/lib/prismadb";
import { BillboardClient } from "./_components/client";
import { BillboardColumn } from "./_components/columns";

const BillboardPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.eComBillboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBillboards: BillboardColumn[] = billboards.map(item => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do yyyy")
  }))
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-6">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default BillboardPage;
