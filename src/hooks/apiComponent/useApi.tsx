import { useState, useEffect } from "react";

interface SecurityComponent {
  id: number;
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  paragraph: string;
}

export default function useApi() {
  const [securities, setSecurities] = useState<SecurityComponent[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("/api/security")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        return response.json();
      })
      .then((data) => {
        setSecurities(data as SecurityComponent[]);
      })
      .catch((err) => {
        setError(err as Error);
      });
  }, []);

  return { securities, error };
}
