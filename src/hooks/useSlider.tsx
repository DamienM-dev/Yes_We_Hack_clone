import { useState, useEffect } from "react";

interface SliderComponent {
  id: number;
  img: string;
  alt: string;
}

export default function useSlider() {
  const [sliders, setSliders] = useState<SliderComponent[]>([]);
  const [errorSlider, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("/api/sliderPlateform")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        return response.json();
      })
      .then((data) => {
        setSliders(data as SliderComponent[]);
      })
      .catch((err) => {
        setError(err as Error);
      });
  }, []);

  return { sliders, errorSlider };
}
