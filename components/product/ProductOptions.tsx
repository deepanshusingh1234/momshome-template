// components/product/ProductOptions.tsx
interface ProductOptionsProps {
    selectedOptions: string[];
    onOptionSelect: (value: string) => void;
    maxSelections: number;
}

const designOptions = [
    { id: "cute-jungle", label: "Cute Jungle", image: "https://www.momshome.in/cdn/shop/files/image-swatches-1_17_1742992284585-1742992296.jpg?width=90" },
    { id: "new-icecream", label: "New Icecream", image: "https://www.momshome.in/cdn/shop/files/image-swatches-1_18_1742992327434-1742992347.jpg?width=90" },
    { id: "lemon", label: "Lemon", image: "https://www.momshome.in/cdn/shop/files/image-swatches-1_5_1725438047100-1742992184.jpg?width=90" },
    { id: "blossom", label: "Blossom", image: "https://www.momshome.in/cdn/shop/files/image-swatches-1_6_1725438056267-1742992193.jpg?width=90" },
    { id: "bloom", label: "Bloom", image: "https://www.momshome.in/cdn/shop/files/image-swatches-1_7_1725438062746-1742992202.jpg?width=90" },
    { id: "pink-giraffe", label: "Pink Giraffe", image: "https://www.momshome.in/cdn/shop/files/image-swatches-1_13_1727439727133-1742992249.jpg?width=90" },
    { id: "flamingo", label: "Flamingo", image: "https://www.momshome.in/cdn/shop/files/image-swatches-1_2_1725438008919-1742992154.jpg?width=90" },
    { id: "blue-whale", label: "Blue Whale", image: "https://www.momshome.in/cdn/shop/files/image-swatches-1_3_1725438020739-1742992163.jpg?width=90" },
    { id: "lion", label: "Lion", image: "https://www.momshome.in/cdn/shop/files/image-swatches-1_11_1727439574952-1742992234.jpg?width=90" },
    { id: "dinopark", label: "Dinopark", image: "https://www.momshome.in/cdn/shop/files/image-swatches-1_12_1727439705488-1742992242.jpg?width=90" },
    { id: "rainbow", label: "Rainbow", image: "https://www.momshome.in/cdn/shop/files/image-swatches-1_15_1727439773601-1742992267.jpg?width=90" },
    { id: "car", label: "Car", image: "https://www.momshome.in/cdn/shop/files/image-swatches-1_16_1727439797729-1742992281.jpg?width=90" },
    { id: "unicorn", label: "Unicorn", image: "https://www.momshome.in/cdn/shop/files/image-swatches-1_1_1725434902118-1742992133.jpg?width=90" },
];

export default function ProductOptions({ selectedOptions, onOptionSelect, maxSelections }: ProductOptionsProps) {
    return (
        <div className="mb-6">
            <div className="border-t border-gray-200 pt-4">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                    Choose Any {maxSelections} <span className="text-red-500">*</span>
                </label>

                {/* Options Grid - Responsive columns */}
                <div className="grid grid-cols-4 lg:grid-cols-7 gap-2 lg:gap-3 mb-3">
                    {designOptions.map((option) => (
                        <div key={option.id} className="text-center">
                            <input
                                type="checkbox"
                                id={`option-${option.id}`}
                                className="hidden"
                                checked={selectedOptions.includes(option.label)}
                                onChange={() => onOptionSelect(option.label)}
                            />
                            <label
                                htmlFor={`option-${option.id}`}
                                className={`block cursor-pointer transition-all ${selectedOptions.includes(option.label)
                                    ? "ring-2 ring-[#ab91df] rounded-md"
                                    : "hover:opacity-80"
                                    }`}
                            >
                                <div className="aspect-square mb-1">
                                    <img
                                        src={option.image}
                                        alt={option.label}
                                        className="w-full h-full object-cover rounded-md"
                                        loading="lazy"
                                    />
                                </div>
                                <span className="text-[10px] lg:text-xs text-gray-700 block truncate">
                                    {option.label}
                                </span>
                            </label>
                        </div>
                    ))}
                </div>

                {/* Selection Message */}
                {selectedOptions.length < maxSelections && (
                    <p className="text-sm text-orange-600">
                        Select {maxSelections - selectedOptions.length} more
                    </p>
                )}
            </div>
        </div>
    );
}