

import {format} from "date-fns"
import prismadb from "@/lib/prismadb";
import { CategoriesClient } from "./_components/client";
import { CategoriesColumn } from "./_components/columns";
import { useRouter } from "next/navigation";

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {

  const billboards = await prismadb.eComCategory.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedCategories: CategoriesColumn[] = billboards.map(item => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.createdAt, "MMMM do yyyy")
  }))

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-6">
        <CategoriesClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
