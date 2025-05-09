import { doctors } from "@/lib/data";
import Card from "./Card";

export const CardFolder = () => {
  return (
    <div className="flex flex-col space-y-4">
      {doctors.map((doctor) => (
        <Card key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};
