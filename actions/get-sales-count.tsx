import prismadb from "@/lib/prismadb"

export const getSalesCount = async (storeId: string) => {
    const salesCount = await prismadb.eComOrder.count({
        where: {
            storeId,
            isPaid: true
        }
    })
    return salesCount
}