export interface IProps {
    setCategory: (category: "All" | number) => void
    selectedCategory: 'All' | number
}