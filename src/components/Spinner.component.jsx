function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        <circle
          className="animate-pulse"
          cx="12"
          cy="12"
          r="10"
          stroke="#63e3ae"
          strokeWidth="8"
        ></circle>
      </svg>
      Processing...
    </div>
  );
}

export { Spinner };
