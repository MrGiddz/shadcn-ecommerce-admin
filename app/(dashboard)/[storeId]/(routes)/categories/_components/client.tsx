"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@radix-ui/react-separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { CategoriesColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface CategoriesClientProps {
  data: CategoriesColumn[]
}

export const CategoriesClient: React.FC<CategoriesClientProps> = ({
  data
}) => {
  const router = useRouter();
  const params = useParams();


  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage category for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API calls for Categories"/>
      <Separator />
      <ApiList entityName="categories" entiyIdName="categoryId"/>
    </>
  );
};
