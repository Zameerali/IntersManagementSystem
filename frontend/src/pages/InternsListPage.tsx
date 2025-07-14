import { useEffect, useState } from "react";
import { getAllInterns } from "../services/internService";
import type { Intern } from "../types/intern";
import InternCard from "../components/InternCard.tsx";

export default function InternListPage() {
  const [interns, setInterns] = useState<Intern[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getAllInterns();
      setInterns(data);
    })();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Interns</h1>
      {interns.map((intern) => (
        <InternCard key={intern.id} intern={intern} />
        
      ))}
    </div>
  );
}
