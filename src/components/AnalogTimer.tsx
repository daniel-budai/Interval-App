export function AnalogTimer() {
  return (
    <div className="w-64">
      <div className="relative w-full pb-[100%]">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {/* Clock face */}
          {[...Array(60)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="2"
              x2="50"
              y2={i % 5 === 0 ? "6" : "4"}
              transform={`rotate(${i * 6} 50 50)`}
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-black"
            />
          ))}
          {/* Clock hand */}
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="10"
            transform={`rotate(0 50 50)`}
            stroke="currentColor"
            strokeWidth="1"
            className="text-gray-700"
          />
        </svg>
      </div>
    </div>
  );
}
