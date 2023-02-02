const CircleIcon = ({fill, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-circle"
    >
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  );
};

export default CircleIcon;
