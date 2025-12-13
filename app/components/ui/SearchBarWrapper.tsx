"use client";
import { useState } from 'react';
import SearchBar from './SearchBar';
import { useRouter } from 'next/navigation';

export default function SearchBarWrapper() {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const handleValidate = () => {
        if (search.trim()) {
            router.push(`/gallery?q=${encodeURIComponent(search.trim())}`);
        } else {
            router.push('/gallery');
        }
    };
    return (
        <div className="mb-8">
            <SearchBar value={search} onInputChange={setSearch} onValidate={handleValidate} />
        </div>
    );
}
