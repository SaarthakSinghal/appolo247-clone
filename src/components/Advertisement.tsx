const Advertisement = () => {
  return (
    <div className="w-fit bg-[#00194A] rounded-xl p-4 flex flex-col items-start text-white">
      {/* Top image row */}
      <div className="flex justify-center -space-x-4 mb-4">
        <img
          src="/consult_doctor.png"
          alt="Doctor 1"
          className=" object-cover"
          width={150}
          height={100}
        />
      </div>

      {/* Text content */}
      <div className="text-start">
        <p className="font-semibold text-sm leading-tight mb-2">
          Need help consult the <br /> right doctor?
        </p>
        <a
          href="tel:+918040245807"
          className="text-blue-300 underline text-sm font-medium"
        >
          Call +91-8040245807 to <br /> book instantly
        </a>
      </div>
    </div>
  );
};

export { Advertisement };
