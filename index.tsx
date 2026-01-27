import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { wasteData, NeighborhoodData, WasteData } from './wasteData';

// Constants for month names
const MONTHS = ["janúar", "febrúar", "mars", "apríl", "maí", "júní", "júlí", "ágúst", "september", "október", "nóvember", "desember"];

// Brand Colors
const COLORS = {
  primary: "#003056", // Reykjanesbær Dark Blue
  secondary: "#009cde", // Reykjanesbær Light Blue
  gray: "#58595b",
  bg: "#f3f4f6"
};

// Icons
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const RecycleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#009cde]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
);


interface BinCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  dates: Date[];
  nextDate: Date | null;
  lastDate: Date | null;
  borderColor: string;
  titleColor: string;
  dateColor: string;
  bgColor: string;
}

const BinCard = ({ title, subtitle, icon, dates, nextDate, lastDate, borderColor, titleColor, dateColor, bgColor }: BinCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const now = new Date().setHours(0, 0, 0, 0);

  const formatDate = (date: Date) => {
    return `${date.getDate()}. ${MONTHS[date.getMonth()]}`;
  };

  const futureDates = dates.filter(d => d.getTime() > now);

  return (
    <div className={`bg-white rounded-xl shadow-lg border-t-8 ${borderColor} overflow-hidden hover:shadow-xl transition-shadow duration-300`}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className={`text-xl font-bold ${titleColor}`}>{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          </div>
          <div className={`${bgColor} p-3 rounded-full bg-opacity-10`}>
            {icon}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Næsta áætlaða losun:</p>
            <p className={`text-2xl font-bold ${dateColor} mt-1`}>
              {nextDate ? formatDate(nextDate) : "Engin dagsetning"}
            </p>
          </div>
          
          <div className="text-sm text-gray-600">
            Síðasta losun var: <span className="font-semibold">{lastDate ? formatDate(lastDate) : "-"}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 bg-gray-50 p-4">
        <button 
          onClick={() => setExpanded(!expanded)}
          className={`w-full flex items-center justify-center text-sm font-medium ${titleColor} hover:opacity-80 transition-colors py-2`}
        >
          {expanded ? "Fela dagsetningar" : "Sýna allar dagsetningar"}
          <span className="ml-2">
            {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </span>
        </button>
        
        {expanded && (
            <div className="mt-4 grid grid-cols-2 gap-2 animate-fadeIn">
                {futureDates.map((date, index) => (
                    <div key={index} className="text-sm text-gray-600 bg-white p-2 rounded text-center border border-gray-100">
                        {formatDate(date)}
                    </div>
                ))}
                {futureDates.length === 0 && <div className="col-span-2 text-center text-sm text-gray-500">Engar fleiri dagsetningar á skrá</div>}
            </div>
        )}
      </div>
    </div>
  );
};

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [result, setResult] = useState<{ street: string, data: WasteData } | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const normalizedQuery = searchQuery.replace(/\d+/g, '').trim().toLowerCase();
    
    let foundStreet = "";
    let foundData: WasteData | null = null;

    for (const neighborhoodKey in wasteData) {
      const neighborhood = wasteData[neighborhoodKey];
      for (const street of neighborhood.streets) {
        if (street === normalizedQuery) {
          foundStreet = street;
          foundData = neighborhood;
          break;
        }
      }
      if (foundData) break;
    }

    if (foundData) {
      setResult({ street: searchQuery.replace(/\d+/g, '').trim(), data: foundData });
    } else {
      setResult(null);
    }
    setHasSearched(true);
  };

  const getNextAndLastDate = (dates: Date[]) => {
    const now = new Date();
    now.setHours(0,0,0,0);
    const bufferDate = new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000); 

    let next = null;
    let last = null;

    for (const date of dates) {
        if (date > bufferDate) {
            if (!next) next = date;
        } else {
            last = date;
        }
    }
    return { next, last };
  };

  // Widget Layout
  return (
    <div className="w-full max-w-[800px] mx-auto p-4 font-sans text-gray-800">
        
        {/* Search Widget Container */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 text-center border border-gray-100 transition-all hover:shadow-2xl">
            <div className="flex justify-center mb-6">
                <img 
                    src="https://www.reykjanesbaer.is/static/files/Stjornsyslusvid/Merki/2025/rbn-merki-1x1-skjoldur-blatt.svg" 
                    alt="Reykjanesbær Logo" 
                    className="h-20 w-20"
                />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>Næsta losun á sorpi</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">Sláðu inn götuheiti og fáðu upp sorphirðudagatal fyrir þitt svæði. Til dæmis "Suðurgata".</p>
            
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative group">
                <div className="flex shadow-md rounded-full overflow-hidden bg-[#4a4a4a] focus-within:ring-4 focus-within:ring-blue-100 transition-all">
                    <input 
                        type="search" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Sláðu inn götuheiti..." 
                        className="w-full px-6 py-4 text-lg outline-none bg-transparent text-white placeholder-gray-300"
                    />
                    <button 
                        type="submit" 
                        className="text-white px-8 py-4 font-semibold text-lg transition-colors flex items-center"
                        style={{ backgroundColor: COLORS.primary }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#002040'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.primary}
                    >
                        <span className="hidden md:inline mr-2">Leita</span>
                        <SearchIcon />
                    </button>
                </div>
            </form>

            {/* Disclaimer Info Box */}
            <div className="mt-8 flex items-start space-x-3 text-sm text-gray-600 bg-[#e6f4fc] p-4 rounded-lg border border-[#b3e0f7] max-w-2xl mx-auto text-left">
                <div className="mt-0.5 flex-shrink-0" style={{ color: COLORS.primary }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                </div>
                <p>
                    Sorphirðudagatalið er til viðmiðunar. Stundum geta orðið smávægilegar breytingar, til dæmis vegna veðurs. Yfirleitt munar þó ekki meira en 1–2 dögum milli hverfa.
                </p>
            </div>
        </div>

        {/* Results Section */}
        {hasSearched && (
            <div className="animate-fade-in-up mt-6">
                {result ? (
                    <div className="space-y-6">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-semibold capitalize" style={{ color: COLORS.primary }}>
                                <span className="text-gray-400 font-normal text-lg block mb-1">Niðurstöður fyrir:</span>
                                {result.street}
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {(() => {
                                const grayInfo = getNextAndLastDate(result.data.gray_dates);
                                return (
                                    <BinCard 
                                        title="Matarleifar og blandaður úrgangur"
                                        subtitle="Tæmdar á 14 daga fresti"
                                        icon={<TrashIcon />}
                                        dates={result.data.gray_dates}
                                        nextDate={grayInfo.next}
                                        lastDate={grayInfo.last}
                                        borderColor="border-gray-400"
                                        titleColor="text-gray-800"
                                        dateColor="text-gray-800"
                                        bgColor="bg-gray-400"
                                    />
                                );
                            })()}

                            {(() => {
                                const blueInfo = getNextAndLastDate(result.data.blue_dates);
                                return (
                                    <BinCard 
                                        title="Plast og pappír"
                                        subtitle="Tæmdar á 28 daga fresti"
                                        icon={<RecycleIcon />}
                                        dates={result.data.blue_dates}
                                        nextDate={blueInfo.next}
                                        lastDate={blueInfo.last}
                                        borderColor="border-[#009cde]"
                                        titleColor="text-[#009cde]"
                                        dateColor="text-[#009cde]"
                                        bgColor="bg-[#009cde]"
                                    />
                                );
                            })()}
                        </div>
                    </div>
                ) : (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center max-w-2xl mx-auto">
                        <div className="text-red-500 mb-4 flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-red-700 mb-2">Gata fannst ekki</h3>
                        <p className="text-red-600">
                            Vinsamlegast athugaðu hvort stafsetningin sé rétt. Þú þarft ekki að slá inn húsnúmer, aðeins nafn götunnar.
                        </p>
                    </div>
                )}
            </div>
        )}
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
