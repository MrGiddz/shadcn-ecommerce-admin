import prismadb from "@/lib/prismadb";
import { ColorForm } from "../_components/color-form";

const ColorPage = async ({ params }: { params: { colorId: string } }) => {
  const colors = await prismadb.eComColor.findUnique({
    where: {
      id: params.colorId,
    },
  });
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={colors} />
      </div>
    </div>
  );
};

export default ColorPage;
