import "./Directory.styles.scss";
import CategoryItem from '../CategoryItem/CategoryItem'

export default function Directory({categories}) {
  return (
    <div className="Directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
