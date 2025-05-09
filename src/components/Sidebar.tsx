const Sidebar = () => {
  return (
    <aside className="min-w-[240px] flex justify-end bg-white border-r border-gray-200 pl-6 py-2 text-sm overflow-y-auto">
      <div className="min-w-4/5 flex flex-col">
        <div className="flex items-center justify-between mb-4 py-2 border-b border-gray-200">
          <h2 className="pr-6 font-semibold text-base text-gray-800">Filters</h2>
          <button className="pr-4 text-sm text-[var(--filter-color)] font-bold cursor-pointer">
            Clear All
          </button>
        </div>

        <div className="flex items-center justify-end pr-4">
          <button className="w-full border border-[var(--filter-color)] text-[var(--filter-color)] rounded-lg py-2 px-2 text-xs font-bold mb-4 hover:bg-[#f0faff]">
            Show Doctors Near Me
          </button>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-base text-gray-800 mb-2">Mode of Consult</h3>
          <label className="flex items-center space-x-2 mb-1 ml-2">
            <input type="checkbox" defaultChecked className="accent-[var(--filter-color)]" />
            <span>Hospital Visit</span>
          </label>
          <label className="flex items-center space-x-2 ml-2">
            <input type="checkbox" defaultChecked className="accent-[var(--filter-color)]" />
            <span>Online Consult</span>
          </label>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-base text-gray-800 mb-2">Experience (In Years)</h3>
          {["0-5", "6-10", "11-16"].map((exp) => (
            <label key={exp} className="flex items-center space-x-2 mb-1 ml-2">
              <input type="checkbox" className="accent-[var(--filter-color)]" />
              <span>{exp}</span>
            </label>
          ))}
          <button className="text-[var(--primary-color)] text-sm font-medium mt-1 hover:underline cursor-pointer ml-2">+1 More</button>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-base text-gray-800 mb-2">Fees (In Rupees)</h3>
          {["100-500", "500-1000", "1000+"].map((fee) => (
            <label key={fee} className="flex items-center space-x-2 mb-1 ml-2">
              <input type="checkbox" className="accent-[var(--filter-color)]" />
              <span>{fee}</span>
            </label>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-base text-gray-800 mb-2">Language</h3>
          {["English", "Hindi", "Telugu", "Tamil"].map((lang) => (
            <label key={lang} className="flex items-center space-x-2 mb-1 ml-2">
              <input type="checkbox" className="accent-[var(--filter-color)]" />
              <span>{lang}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
