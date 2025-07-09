import { useState, useEffect } from "react";

interface Book {
  title: string;
  author: string;
  coverUrl?: string;
}

export const useSuggestedBook = (topic: "physics" | "philosophy") => {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://openlibrary.org/subjects/${topic}.json?limit=20`)
      .then((res) => {
        if (!res.ok) throw new Error("Fetch error");
        return res.json();
      })
      .then((data) => {
        const works = data.works || [];
        if (works.length === 0) {
          throw new Error("No works found");
        }
        const choice = works[Math.floor(Math.random() * works.length)];
        const author = choice.authors?.[0]?.name || "Unknown";
        const coverUrl = choice.cover_id
          ? `https://covers.openlibrary.org/b/id/${choice.cover_id}-M.jpg`
          : undefined;
        setBook({ title: choice.title, author, coverUrl });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [topic]);

  return { book, loading, error };
};
