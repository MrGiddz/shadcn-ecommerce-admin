import prismadb from "@/lib/prismadb";
import { ProductForm } from "../_components/product-form";

const ProductPage = async ({
  params,
}: {
  params: { productId: string, storeId: string };
}) => {
  const product = await prismadb.eComProduct.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      images: true
    }
  });

  const categories = await prismadb.eComCategory.findMany({
    where: {
      storeId: params.storeId 
    }
  })

  const sizes = await prismadb.eComSize.findMany({
    where: {
      storeId: params.storeId 
    }
  })

  const colors = await prismadb.eComColor.findMany({
    where: {
      storeId: params.storeId 
    }
  })
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm
        initialData={product}
        categories={categories}
        sizes={sizes}
        colors={colors}
        />
      </div>
    </div>
  );
};

export default ProductPage;
