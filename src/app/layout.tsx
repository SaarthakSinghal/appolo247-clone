import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Advertisement } from "@/components/Advertisement";
import { CardFolder } from "@/components/CardFolder";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Book Appointment Online with General Physician & Internal Medicine Doctors near you | Apollo 247",
  description:
    "General Physician & Internal Medicine - Consult experienced general physicians and internal medicine doctors online at Apollo 247 for diagnosis and treatment of common illnesses, chronic conditions, and preventive care. Book an appointment today.",
  metadataBase: new URL(
    "https://www.apollo247.com/general-physician-internal-medicine?device=desktop"
  ),
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col h-screen">
          {/* NAVBAR */}
          {/* Adjusted to take up less height if navbar is not that tall, or set a fixed height e.g., h-16 */}
          <div className="shrink-0">
            <Navbar />
          </div>
          {/* CONTENT */}
          <div className="flex flex-1 w-full gap-4 px-6 py-4 overflow-hidden">
            {/* Sidebar */}
            <div className="w-[240px] flex-none overflow-y-auto">
              <Sidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex-grow flex flex-col overflow-y-auto px-6">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-1 py-2 shrink-0">
                <span className="text-xs text-[var(--primary-color)]">
                  Home
                </span>
                <span className="text-xs font-bold">&gt;</span>
                <span className="text-xs text-[var(--primary-color)]">
                  Doctors
                </span>
                <span className="text-xs font-bold">&gt;</span>
                <span className="text-xs text-[var(--primary-color)]">
                  General Physician
                </span>
              </div>

              {/* Top Heading + Sort Row */}
              <div className="flex flex-row justify-between items-start mb-4 shrink-0">
                <div className="flex-1 w-[75%]">
                  <h1 className="text-2xl font-bold text-gray-800 leading-tight">
                    Consult General Physicians Online - Internal Medicine
                    Specialists
                  </h1>
                  <p className="text-gray-500 text-xs mt-1">(756 doctors)</p>
                </div>
                <div className="w-[25%] ml-8 shrink-0">
                  <button className="w-full flex items-center justify-between border border-gray-300 rounded-md px-3 py-1.5 text-xs font-medium hover:shadow-sm cursor-pointer bg-white">
                    <svg
                      className="w-10 h-10 text-gray-700 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 18L16 6M16 6L20 10.125M16 6L12 10.125"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M8 6L8 18M8 18L12 13.875M8 18L4 13.875"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-gray-700">Availability</span>
                    <svg
                      className="w-3 h-3 ml-2 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Doctor Cards Area (children will be rendered here) */}
              <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                <CardFolder />
              </div>
            </div>

            {/* Advertisement */}
            <div className="w-[280px] flex-none overflow-y-auto py-8">
              <Advertisement />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { Navbar } from "@/components/Navbar";
// import Sidebar from "@/components/Sidebar";
// import { Advertisement } from "@/components/Advertisement";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title:
//     "Book Appointment Online with General Physician & Internal Medicine Doctors near you | Apollo 247",
//   description:
//     "General Physician & Internal Medicine - Consult experienced general physicians and internal medicine doctors online at Apollo 247 for diagnosis and treatment of common illnesses, chronic conditions, and preventive care. Book an appointment today.",
//   metadataBase: new URL(
//     "https://www.apollo247.com/general-physician-internal-medicine?device=desktop"
//   ),
//   icons: {
//     icon: "/logo.png",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} antialiased`}>
//         <div className="flex flex-col h-screen">
//           {/* NAVBAR */}
//           <div className="h-1/6">
//             <Navbar />
//           </div>
//           {/* CONTENT */}
//           <div className="flex w-full gap-4 px-6">
//             {/* Sidebar */}
//             <div className="w-[240px] flex-none">
//               <Sidebar />
//             </div>

//             {/* Main Content */}
//             <div className="flex-grow overflow-y-auto px-6">
//               {/* Breadcrumb + Heading + Cards */}
//               <div className="h-1/12 flex items-center gap-1">
//                 <span className="text-xs text-[var(--primary-color)]">
//                   Home
//                 </span>
//                 <span className="text-xs font-bold">&gt;</span>
//                 <span className="text-xs text-[var(--primary-color)]">
//                   Doctors
//                 </span>
//                 <span className="text-xs font-bold">&gt;</span>
//                 <span className="text-xs text-[var(--primary-color)]">
//                   General Physician
//                 </span>
//               </div>
//               <div className="flex flex-col pt-4 pr-4">
//                 {/* Top Heading + Sort Row */}
//                 <div className="flex flex-row justify-between items-center mb-4">
//                   <div className="w-[70%]">
//                     <h1 className="text-2xl font-bold text-gray-900 leading-snug">
//                       Consult General Physicians Online - Internal <br></br>Medicine
//                       Specialists
//                     </h1>
//                     <p className="text-gray-600 text-sm mt-1">(756 doctors)</p>
//                   </div>
//                   <div className="w-[25%]">
//                     <button className="w-full flex items-center justify-between border border-gray-300 rounded-md px-4 py-2 text-sm font-medium hover:shadow-sm cursor-pointer">
//                       <svg
//                         className="w-12 h-12 text-gray-500"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//                         <g
//                           id="SVGRepo_tracerCarrier"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         ></g>
//                         <g id="SVGRepo_iconCarrier">
//                           {" "}
//                           <path
//                             d="M16 18L16 6M16 6L20 10.125M16 6L12 10.125"
//                             stroke="#000000"
//                             strokeWidth="1.5"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           ></path>{" "}
//                           <path
//                             d="M8 6L8 18M8 18L12 13.875M8 18L4 13.875"
//                             stroke="#000000"
//                             strokeWidth="1.5"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           ></path>{" "}
//                         </g>
//                       </svg>
//                       <span className="text-gray-700 text-base">Availability</span>
//                       <svg
//                         className="w-4 h-4 ml-2 text-gray-500"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                   <div className="w-[30%] flex justify-end">
//                     <button className="flex items-center border border-gray-300 rounded-md"></button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Advertisement */}
//             <div className="w-[280px] flex-none bg-red-200">
//               <Advertisement />
//             </div>
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }
