import { Doctor } from "@/lib/types";

interface CardProps {
  doctor: Doctor;
}

const Card = ({ doctor }: CardProps) => {
  return (
    <div className="flex flex-row bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      {/* Left: Image */}
      <div className="w-[80px] h-[80px] flex-shrink-0 rounded overflow-hidden">
        <img
          src={doctor.avatar}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Center: Info */}
      <div className="flex flex-col flex-grow px-4">
        <div className="flex items-start justify-between">
          <h2 className="text-base font-bold text-gray-900">
            {doctor.name}{" "}
            <span className="inline-block text-gray-400 text-xs ml-1">ⓘ</span>
          </h2>

          {/* Badge
          {doctor.badges?.includes("Doctor of the Hour") && (
            <span className="text-[10px] bg-yellow-600 text-white px-2 py-0.5 rounded-sm font-semibold">
              DOCTOR OF THE HOUR
            </span>
          )} */}
        </div>

        <p className="text-sm text-gray-500 truncate">
          {doctor.specialization}
        </p>
        <p className="text-xs text-[#7E22CE] font-bold mt-1">
          {doctor.experience} YEARS • {doctor.degrees.join(", ")}
        </p>
        <p className="text-xs text-gray-400 mt-1">{doctor.hospital}</p>
        <p className="text-xs text-gray-400">{doctor.location}</p>
      </div>

      {/* Right: Pricing + Buttons */}
      <div className="flex flex-col items-end space-y-2">
        {/* Prices */}
        <div className="flex space-x-4 font-semibold">
          {doctor.fees.offline && <span>₹{doctor.fees.offline}</span>}
          {doctor.fees.online && <span>₹{doctor.fees.online}</span>}
        </div>

        {/* Buttons */}
        <div className="flex space-x-2">
          {doctor.fees.online && (
            <button className="text-[#007C9D] border border-[#007C9D] text-sm px-3 py-1 rounded-md">
              Consult Online
              {doctor.availability?.onlineInMinutes && (
                <div className="text-[10px] text-gray-500">Available</div>
              )}
            </button>
          )}
          {doctor.fees.offline && (
            <button className="bg-[#007C9D] text-white text-sm px-3 py-1 rounded-md">
              Visit Doctor
              {doctor.availability?.offlineInMinutes && (
                <div className="text-[10px] text-gray-200">Available</div>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
