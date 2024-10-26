
export interface IItemSize {
    title: string;
    price: number;
    default?: boolean;
}

export interface IItem {
    title: string;
    image: string;
    description: string;
    rating: number;
    modifiers: string[];
    sizes: IItemSize[];
}

export interface ICategory {
    title: string;
    icon: string;
    items: IItem[]
}