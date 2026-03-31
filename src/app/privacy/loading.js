export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Pulsing logo */}
        <div className="relative">
          <div className="w-20 h-20 bg-[#c4f082] rounded-2xl flex items-center justify-center animate-pulse">
            <div className="w-16 h-16 bg-[#a8e063] rounded-xl flex items-center justify-center">
              <svg
                className="w-10 h-10 text-[#2d3e50]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          {/* Animated ring */}
          <div className="absolute inset-0 rounded-2xl border-4 border-[#c4f082] animate-ping opacity-75"></div>
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-semibold text-[#2d3e50]">Loading...</p>
          <p className="text-sm text-gray-500">
            Artificial intelligence is preparing the data
          </p>
        </div>

        {/* Animated dots */}
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-[#56c596] rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-[#56c596] rounded-full animate-bounce [animation-delay:150ms]"></div>
          <div className="w-3 h-3 bg-[#56c596] rounded-full animate-bounce [animation-delay:300ms]"></div>
        </div>
      </div>
    </div>
  );
}
