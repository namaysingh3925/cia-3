const RecipeCard = ({ recipe, onClick }) => {
    return (
        <div
            onClick={onClick}
            style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--accent-border)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
            }}
        >
            <img
                src={recipe.image}
                alt={recipe.title}
                style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderBottom: '1px solid var(--border)'
                }}
            />
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                <span style={{
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    color: 'var(--accent)',
                    background: 'var(--accent-bg)',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    width: 'fit-content'
                }}>
                    {recipe.difficulty}
                </span>
                <h3 style={{ margin: '4px 0', color: 'var(--text-h)', fontSize: '18px', lineHeight: '1.3' }}>
                    {recipe.title}
                </h3>
                <p style={{ color: 'var(--text)', fontSize: '14px', margin: 0, flexGrow: 1, lineHeight: '1.4' }}>
                    {recipe.description}
                </p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '13px',
                    color: 'var(--text)',
                    borderTop: '1px solid var(--border)',
                    paddingTop: '10px',
                    marginTop: '8px'
                }}>
                    <span>⏱️ {recipe.prepTime}</span>
                    <span>👥 {recipe.servings} servings</span>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
