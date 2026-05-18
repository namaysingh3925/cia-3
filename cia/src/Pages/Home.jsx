import { useState } from "react"
import SearchBar from "../Componets/SearchBar.jsx"
import RecipeCard from "../Componets/RecipeCard.jsx"
import RecipeDetailModal from "../Componets/RecipeDetailModel.jsx"

const SAMPLE_RECIPES = [
    {
        id: '1',
        title: 'Classic Italian Margherita Pizza',
        description: 'A simple yet delightful traditional Italian pizza topped with fresh mozzarella, vibrant tomatoes, and fragrant basil leaves.',
        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600',
        prepTime: '30 mins',
        servings: 2,
        difficulty: 'Medium',
        ingredients: [
            '1 pre-made pizza dough ball',
            '1/2 cup fresh tomato sauce',
            '1 cup fresh mozzarella cheese, sliced',
            'A handful of fresh basil leaves',
            '1 tbsp extra virgin olive oil',
            'Salt and black pepper to taste'
        ],
        instructions: [
            'Preheat your oven to 450°F (230°C), preferably with a pizza stone inside.',
            'Roll and stretch out the pizza dough on a floured surface to your desired thickness.',
            'Spread the tomato sauce evenly across the dough, leaving a small border for the crust.',
            'Arrange the fresh mozzarella slices evenly over the tomato sauce.',
            'Bake for 10-12 minutes until the crust is golden brown and cheese is beautifully bubbly.',
            'Remove, scatter fresh basil leaves on top, drizzle with olive oil, and serve hot.'
        ]
    },
    {
        id: '2',
        title: 'Creamy Garlic Parmesan Pasta',
        description: 'Rich, comforting, and packed with garlic flavor, this quick pasta dish combines heavy cream and plenty of genuine Parmesan.',
        image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&q=80&w=600',
        prepTime: '20 mins',
        servings: 3,
        difficulty: 'Easy',
        ingredients: [
            '8 oz fettuccine or spaghetti',
            '2 tbsp unsalted butter',
            '4 cloves garlic, minced',
            '1 cup heavy cream',
            '1 cup freshly grated Parmesan cheese',
            'Salt, pepper, and fresh parsley'
        ],
        instructions: [
            'Cook the pasta in a large pot of salted boiling water until al dente.',
            'Meanwhile, melt butter in a skillet over medium heat. Sauté garlic for 1-2 minutes until fragrant.',
            'Pour in heavy cream and bring to a gentle simmer for 3 minutes to thicken.',
            'Turn off heat, stir in Parmesan cheese until smooth, then toss with drained pasta.'
        ]
    },
    {
        id: '3',
        title: 'Avocado Toast with Poached Egg',
        description: 'The ultimate healthy breakfast choice featuring perfectly seasoned smashed avocado on artisan sourdough topped with a runny egg.',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600',
        prepTime: '15 mins',
        servings: 1,
        difficulty: 'Easy',
        ingredients: [
            '1 thick slice of sourdough bread',
            '1 ripe avocado',
            '1 fresh large egg',
            '1 tsp lemon juice',
            'Red pepper flakes, salt, and black pepper'
        ],
        instructions: [
            'Toast your sourdough bread until crisp and golden brown.',
            'Mash the avocado with lemon juice, salt, and pepper in a small bowl.',
            'Poach the egg in gently simmering water with a splash of vinegar for exactly 3 minutes.',
            'Spread avocado on the toast, land the poached egg on top, and garnish with red pepper flakes.'
        ]
    },
    {
        id: '4',
        title: 'Decadent Chocolate Lava Cakes',
        description: 'An indulgent gourmet dessert with a rich chocolate exterior crust and a warm, gooey, liquid chocolate core.',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600',
        prepTime: '25 mins',
        servings: 2,
        difficulty: 'Hard',
        ingredients: [
            '4 oz high-quality bittersweet chocolate',
            '1/4 cup unsalted butter',
            '1 large whole egg + 1 egg yolk',
            '2 tbsp granulated sugar',
            '1 tbsp all-purpose flour'
        ],
        instructions: [
            'Preheat oven to 425°F (218°C). Thoroughly grease and cocoa-dust two ramekins.',
            'Melt chocolate and butter together in the microwave in brief bursts until fully sleek.',
            'Whisk eggs and sugar until pale yellow, fold in chocolate and flour gently.',
            'Bake for 12-14 minutes so sides are set but centers remain soft, flip onto plates, and serve immediately.'
        ]
    }
];

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const handleSearch = (query) => {
        setSearchTerm(query);
    };

    const filteredRecipes = SAMPLE_RECIPES.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ color: 'var(--text-h)', margin: '0 0 10px 0' }}>Delicious Recipes</h1>
            <p style={{ color: 'var(--text)', marginBottom: '30px' }}>Discover and cook incredible meals with step-by-step guidance.</p>

            <SearchBar onSearch={handleSearch} />

            {searchTerm && (
                <p style={{ marginTop: '15px', color: 'var(--text)', fontSize: '15px' }}>
                    Showing results for: <strong>{searchTerm}</strong> ({filteredRecipes.length} found)
                </p>
            )}

            {/* Responsive Card Grid Grid Layout */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '24px',
                marginTop: '40px'
            }}>
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map(recipe => (
                        <RecipeCard
                            key={recipe.id}
                            recipe={recipe}
                            onClick={() => setSelectedRecipe(recipe)}
                        />
                    ))
                ) : (
                    <div style={{ gridColumn: '1 / -1', padding: '40px', color: 'var(--text)' }}>
                        <h3>No recipes match your search criteria.</h3>
                        <p>Try looking up ingredients like "chocolate", "garlic", or "avocado"!</p>
                    </div>
                )}
            </div>

            {/* Detailed Modal Popup Overlay */}
            <RecipeDetailModal
                recipe={selectedRecipe}
                onClose={() => setSelectedRecipe(null)}
            />
        </div>
    )
}

export default Home;
