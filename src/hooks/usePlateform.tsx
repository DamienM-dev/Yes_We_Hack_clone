import { useState, useEffect } from "react";

interface PlateformComponent {
  id: number;
  img: string;
  alt: string;
  title: string;
  list: string;
  paragraph: string;
}

export default function usePlateform() {
  const [plateforms, setPlateforms] = useState<PlateformComponent[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("/api/plateform")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        return response.json();
      })
      .then((data) => {
        setPlateforms(data as PlateformComponent[]);
      })
      .catch((err) => {
        setError(err as Error);
      });
  }, []);

  return { plateforms, error };
}
