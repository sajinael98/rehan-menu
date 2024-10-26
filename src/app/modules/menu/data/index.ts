import { ICategory, IItemSize } from "../types"

export const CATEGORIES: {name: string}[] = [
    {
        name: 'الأكثر طلباً'
    },
    {
        name: 'المقبلات'
    },
    {
        name: 'الأطباق الرئيسية'
    },
    {
        name: 'البيتزا'
    },
    {
        name: 'المعكرونة'
    },
    {
        name: 'الأطباق البحرية'
    },
    {
        name: 'السندويشات'
    },
    {
        name: 'المشروبات'
    },
    {
        name: 'الحلويات'
    }
]

const modifiers = ['صلصة حارة', 'زيتون أسود', 'بصل مكرمل', 'مشروم', 'جبنة دبل']
const sizes: IItemSize[] = [
    {
        title: 'صغير',
        price: 35,
        default: true
    },
    {
        title: 'وسط',
        price: 45
    },
    {
        title: 'كبير',
        price: 55
    }
]

export const CATEGORIES_LIST: ICategory[] = [
    {
        title: 'الأكثر طلباً',
        icon: 'Vector1.png',
        items: [
            {
                title: 'دجاج الفطر بالفاصولياء',
                image: '/images/food/1.jpg',
                rating: 4.5,
                description: 'صلصة طماطم، جبنة موزاريلا، دجاج مشوي، فلفل ألوان، زيتون أسود، بصل مكرمل، مشروم، بارميزان، وأوراق ريحان',
                sizes,
                modifiers
            },
            {
                title: 'سمك السالمون مع الخضار',
                image: '/images/food/2.jpg',
                rating: 4.3,
                description: 'أفوكادو، طماطم، سمك سالمون، فلفل ألوان، زيتون أسود، بصل مكرمل، مشروم، بارميزان، وأوراق ريحان',
                sizes,
                modifiers
            },
            {
                title: 'سمك السالمون مع الخضار',
                image: '/images/food/2.jpg',
                rating: 4.3,
                description: 'أفوكادو، طماطم، سمك سالمون، فلفل ألوان، زيتون أسود، بصل مكرمل، مشروم، بارميزان، وأوراق ريحان',
                sizes,
                modifiers
            }
        ],
    },
    {
        title: 'البيتزا',
        icon: 'Vector4.png',
        items: [
            {
                title: 'بيتزا خضار مشكل',
                image: '/images/food/4.jpg',
                rating: 4.0,
                description: 'صلصة طماطم، جبنة موزاريلا، دجاج مشوي، فلفل ألوان، زيتون أسود، بصل مكرمل، مشروم، بارميزان، وأوراق ريحان',
                sizes,
                modifiers
            },
            {
                title: 'بيتزا البيبروني',
                image: '/images/food/5.jpg',
                rating: 4.3,
                description: 'أفوكادو، طماطم، سمك سالمون، فلفل ألوان، زيتون أسود، بصل مكرمل، مشروم، بارميزان، وأوراق ريحان',
                sizes,
                modifiers
            },
            {
                title: '1سمك السالمون مع الخضار',
                image: '/images/food/5.jpg',
                rating: 4.3,
                description: 'أفوكادو، طماطم، سمك سالمون، فلفل ألوان، زيتون أسود، بصل مكرمل، مشروم، بارميزان، وأوراق ريحان',
                sizes,
                modifiers
            }
        ]
    }
]