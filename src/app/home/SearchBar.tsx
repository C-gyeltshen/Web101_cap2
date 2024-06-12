import { useState } from 'react';
import { Button } from "@/components/ui/button"

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(query);
    };

    return (

        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search Pokemon"
            className="border rounded p-2"
        />
        <Button type="submit" variant="default">Search</Button>
        </form>
    );
};

export default SearchBar;
