import { useEffect, useState, useCallback } from "react";

interface BachWork {
  title: string;
  subtitle?: string;
  id: string;
  genre: string;
}
export const useRandomBachWork = (
  genre: "Popular" | "Recommended" = "Recommended"
) => {
  const [work, setWork] = useState<BachWork | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWork = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(
        `https://api.openopus.org/work/list/composer/87/genre/${genre}.json`
      );
      const data = await res.json();
      if (data.status.success !== "true") {
        throw new Error("API error");
      }

      const works = data.works;
      const random = works[Math.floor(Math.random() * works.length)];

      setWork({
        title: random.title,
        subtitle: random.subtitle || "",
        id: random.id,
        genre: random.genre
      });
    } catch (err) {
      setError("Error fetching Bach's work");
      console.error("Error fetching data", err);
    } finally {
      setLoading(false);
    }
  }, [genre]);

  useEffect(() => {
    fetchWork();
  }, [genre, fetchWork]);

  return { work, loading, error, refetch: fetchWork };
};
