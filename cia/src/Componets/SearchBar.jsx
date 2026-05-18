import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(query); // Sends the search term back up to the parent component
        }
    };

    const handleClear = () => {
        setQuery('');
        if (onSearch) {
            onSearch(''); // Resets search results
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                gap: '10px',
                maxWidth: '500px',
                margin: '20px auto',
                padding: '0 10px'
            }}
        >
            <div style={{ position: 'relative', flexGrow: 1, display: 'flex' }}>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search recipes..."
                    style={{
                        width: '100%',
                        padding: '10px 40px 10px 12px',
                        fontSize: '16px',
                        borderRadius: '6px',
                        border: '1px solid var(--border)', // Uses your index.css border color
                        background: 'var(--bg)',           // Uses your theme background
                        color: 'var(--text-h)',            // Uses your theme text color
                        outline: 'none',
                    }}
                />
                {query && (
                    <button
                        type="button"
                        onClick={handleClear}
                        style={{
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            border: 'none',
                            background: 'transparent',
                            color: 'var(--text)',
                            cursor: 'pointer',
                            fontSize: '16px'
                        }}
                    >
                        ✕
                    </button>
                )}
            </div>
            <button
                type="submit"
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: 'var(--accent)', // Integrates with your index.css accent color
                    color: '#fff',
                    cursor: 'pointer',
                    fontWeight: '500'
                }}
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
