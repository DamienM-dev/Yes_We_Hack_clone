import { useEffect, useState } from "react";

type ClientComponent = {
  id: number;
  img: string;
  alt: string;
  paragraph: string;
  who: string;
  link: string;
};

export default function useClient() {
  const [clients, setClients] = useState<ClientComponent[]>([]);
  const [errors, setErrors] = useState<Error | null>(null);

  useEffect(() => {
    fetch("/api/clients")
      .then((response) => {
        if (!response.ok) {
          throw new Error("une erreur est survenue dans le composant client:");
        }
        return response.json();
      })
      .then((data) => {
        setClients(data as ClientComponent[]);
      })
      .catch((err) => {
        setErrors(err as Error);
      });
  }, []);

  return { clients, errors };
}
