import { useState, useEffect } from "react";

interface ActualityComponent {
  id: number;
  img: string;
  alt: string;
  paragraph: string;
  link: string;
}

export default function useActuality() {
  const [actuality, setActuality] = useState<ActualityComponent[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("/api/actuality")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        return response.json();
      })
      .then((data) => {
        setActuality(data as ActualityComponent[]);
      })
      .catch((err) => {
        setError(err as Error);
      });
  }, []);

  return { actuality, error };
}
