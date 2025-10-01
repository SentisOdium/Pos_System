import { category } from "../../common/userObject";
import SearchQuery from "../searchQuery/searchQuery";
type CategoryButtonProps = {
  label: string;
  onClick: () => void;
};

type OrderPageNavProps = {
  setSearchQuery: (query: string) => void;
  setPage: (page: number) => void;
};

export const OrderPageNav = ({ setSearchQuery, setPage }: OrderPageNavProps) => {
  return (
      <div className="max-w-5xl mx-auto">
        <nav className="w-full bg-amber-400 flex justify-center items-center p-2 rounded-b-xl gap-4">
          {category.map(({ KEY, label }) => (
            <CategoryButton
              key={KEY}
              label={label}
              onClick={() => {
                setSearchQuery(KEY);
                setPage(1);
              }}
            />
          ))}
        </nav>
      </div>
  );
};

const CategoryButton = ({ label, onClick }: CategoryButtonProps) => (
  <button
    className="px-4 py-2 bg-white rounded-lg hover:bg-gray-200 transition-colors"
    onClick={onClick}>
      {label}
  </button>
);

