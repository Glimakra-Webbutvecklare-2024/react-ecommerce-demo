// TODO:    
// Skapa en komponent som ritar upp alla categorier
// Skicka även med alla funktioner som behövs via props

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {
    return (<div className="category-options">
          { categories.map((category, idx) => (
            <label key={`category_${idx}`} className="category-option">
                <input type="radio" value={category} checked={selectedCategory === category} name="category" onChange={evt => setSelectedCategory(evt.target.value)} /><span>{ category.toUpperCase() }</span></label>
          )) }
        </div>);
}

export default CategoryFilter;