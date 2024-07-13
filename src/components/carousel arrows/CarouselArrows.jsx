export const NextArrow = ({
  onClick,
  color = "text-neutral",
  btnType = "",
  className,
}) => (
  <button onClick={onClick} className={`p-2 btn ${btnType} ${className}`}>
    <svg
      className={`w-8 h-8 ${color}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
);

export const PrevArrow = ({
  onClick,
  color = "text-neutral",
  btnType = "",
  className,
}) => (
  <button onClick={onClick} className={`p-2 btn ${btnType} ${className}`}>
    <svg
      className={`w-8 h-8 ${color}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
);
