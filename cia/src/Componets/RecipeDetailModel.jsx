const RecipeDetailModal = ({ recipe, onClose }) => {
    if (!recipe) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '20px',
            boxSizing: 'border-box'
        }} onClick={onClose}>
            <div style={{
                background: 'var(--bg)',
                color: 'var(--text)',
                width: '100%',
                maxWidth: '650px',
                maxHeight: '90vh',
                borderRadius: '16px',
                overflowY: 'auto',
                boxShadow: 'var(--shadow)',
                position: 'relative',
                border: '1px solid var(--border)'
            }} onClick={(e) => e.stopPropagation()}>

                {/* Close Floating Button */}
                <button onClick={onClose} style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: 'var(--code-bg)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-h)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10
                }}>✕</button>

                {/* Main Food Photo */}
                <img src={recipe.image} alt={recipe.title} style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'cover'
                }} />

                {/* Recipe Full Info Grid */}
                <div style={{ padding: '24px', textAlign: 'left' }}>
                    <div style={{ display: 'flex', gap: '15px', marginBottom: '12px', alignItems: 'center' }}>
                        <span style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                            color: 'var(--accent)',
                            background: 'var(--accent-bg)',
                            padding: '4px 8px',
                            borderRadius: '4px'
                        }}>{recipe.difficulty}</span>
                        <span style={{ fontSize: '14px' }}>⏱️ {recipe.prepTime}</span>
                        <span style={{ fontSize: '14px' }}>👥 {recipe.servings} servings</span>
                    </div>

                    <h2 style={{ color: 'var(--text-h)', fontSize: '26px', margin: '0 0 12px 0' }}>{recipe.title}</h2>
                    <p style={{ fontStyle: 'italic', marginBottom: '24px', color: 'var(--text)', lineHeight: '1.5' }}>
                        {recipe.description}
                    </p>

                    {/* Ingredients Checklist */}
                    <h3 style={{ color: 'var(--text-h)', fontSize: '18px', borderBottom: '2px solid var(--accent-bg)', paddingBottom: '6px', marginBottom: '12px' }}>
                        Ingredients
                    </h3>
                    <ul style={{ paddingLeft: '20px', marginBottom: '24px', lineHeight: '1.7' }}>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index} style={{ marginBottom: '4px' }}>{ingredient}</li>
                        ))}
                    </ul>

                    {/* Sequential Instructions */}
                    <h3 style={{ color: 'var(--text-h)', fontSize: '18px', borderBottom: '2px solid var(--accent-bg)', paddingBottom: '6px', marginBottom: '12px' }}>
                        Instructions
                    </h3>
                    <ol style={{ paddingLeft: '20px', lineHeight: '1.7', margin: 0 }}>
                        {recipe.instructions.map((step, index) => (
                            <li key={index} style={{ marginBottom: '12px' }}>
                                <strong style={{ color: 'var(--text-h)' }}>Step {index + 1}:</strong> {step}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetailModal;
