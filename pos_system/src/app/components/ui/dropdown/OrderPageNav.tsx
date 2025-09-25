"use client";

type OrderPageNavProps = {
    search: (query: string) => void;
    page: (page: number) => void;
}

const category = [
    {KEY: "",           label: "All"        },
    {KEY: "sides",      label: "Sides"      }, 
    {KEY: "breakfast",  label: "Breakfast"  },
    {KEY: "lunch",      label: "Lunch"      }, 
    {KEY: "burger",     label: "Burger"     },
    {KEY: "dinner",     label: "Dinner"     },
    {KEY: "beverage",   label: "Beverage"   }, 
    {KEY: "dessert",    label: "Dessert"    },
]

export const OrderPageNav = ({search, page}: OrderPageNavProps) => {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="w-full bg-amber-400 flex justify-center items-center p-2 rounded-b-4xl gap-4">
                {category.map(({KEY, label}) => (
                    <button
                        className="px-4 py-2 bg-white rounded-lg hover:bg-gray-200"
                        key={KEY}
                        onClick={() => {search(label); page(1);}}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    )
}
