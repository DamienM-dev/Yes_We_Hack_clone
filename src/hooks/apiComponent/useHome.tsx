import { useState, useEffect } from "react";

interface ApiHomeComponent {
  id: number;
  img: string;
  alt: string;
  title: string;
  paragraph: string;
}

export default function useHome() {
  const [homeComponents, setHomeComponents] = useState<ApiHomeComponent[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("/api/homePrincipal")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        return response.json();
      })
      .then((data) => {
        setHomeComponents(data as ApiHomeComponent[]);
      })
      .catch((err) => {
        setError(err as Error);
      });
  }, []);

  return { homeComponents, error };
}
