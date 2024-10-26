import { ScrollArea } from "@mantine/core";
import { Category } from "..";
import { ICategory } from "../../types";

interface CategoriesListProps {
    data: ICategory[] | undefined
}

export default function CategoriesList({ data = [] }: CategoriesListProps) {
    const categories = data.map((category) => {
        return <Category key={category.title} category={category} />
    })

    return <ScrollArea style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, width: "100%", height: "100%" }} type="never">
        {categories}
    </ScrollArea>
}