const PatternQuotes = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={120} height={100} viewBox="0 0 120 100" {...props}>
    <defs>
      <linearGradient id="a" x1="31.368%" x2="100%" y1="72.917%" y2="19.557%">
        <stop offset="0%" stopColor="#9975D0" />
        <stop offset="100%" stopColor="#4A3FDB" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M52.615 0 24.858 100H0V0h52.615zM120 0 92.243 100H67.385V0H120z"
      opacity={0.15}
    />
  </svg>
)

export default PatternQuotes
