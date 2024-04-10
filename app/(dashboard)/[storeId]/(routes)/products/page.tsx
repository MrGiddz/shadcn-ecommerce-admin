import {format} from "date-fns"
import prismadb from "@/lib/prismadb";
import { ProductClient } from "./_components/client";
import { ProductColumn } from "./_components/columns";
import { formatter } from "@/lib/utils";

const ProductPage = async ({ params }: { params: { storeId: string } }) => {
  const products = await prismadb.eComProduct.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      category: true,
      size: true,
      color: true,
      images: true
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedProducts: ProductColumn[] = products.map(item => ({
    id: item.id,
    name: item.name,
    isFeatured: item.isFeatured,
    isArchived: item.isArchived,
    price: formatter.format(item.price.toNumber()),
    category: item.category.name,
    size: item.size.name,
    color: item.color.name,
    createdAt: format(item.createdAt, "MMMM do yyyy")
  }))
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-6">
        <ProductClient data={formattedProducts} />
      </div>
    </div>
  );
};

export default ProductPage;
