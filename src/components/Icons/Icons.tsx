export const FeedIcon = ({
  color,
  width,
  height,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    width={width || "28"}
    height={height || "28"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.6 20H18.4C18.8243 20 19.2313 19.8314 19.5314 19.5314C19.8314 19.2313 20 18.8243 20 18.4V5.6C20 5.17565 19.8314 4.76869 19.5314 4.46863C19.2313 4.16857 18.8243 4 18.4 4H8.8C8.37565 4 7.96869 4.16857 7.66863 4.46863C7.36857 4.76869 7.2 5.17565 7.2 5.6V18.4C7.2 18.8243 7.03143 19.2313 6.73137 19.5314C6.43131 19.8314 6.02435 20 5.6 20ZM5.6 20C5.17565 20 4.76869 19.8314 4.46863 19.5314C4.16857 19.2313 4 18.8243 4 18.4V11.2C4 10.32 4.72 9.6 5.6 9.6H7.2M16.8 13.6H10.4M14.4 16.8H10.4M10.4 7.2H16.8V10.4H10.4V7.2Z"
      stroke={color || "#E8E8E8"}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ExploreIcon = ({
  color,
  width,
  height,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    width={width || "28"}
    height={height || "28"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
      stroke={color || "#E8E8E8"}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.392 8.608L13.696 13.696L8.60805 15.392L10.304 10.304L15.392 8.608Z"
      stroke={color || "#E8E8E8"}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SavedIcon = ({
  color,
  width,
  height,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    width={width || "28"}
    height={height || "28"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 21L12 17L5.00002 21V4.99998C5.00002 4.46954 5.21073 3.96084 5.5858 3.58576C5.96087 3.21069 6.46958 2.99998 7.00002 2.99998H17C17.5304 2.99998 18.0392 3.21069 18.4142 3.58576C18.7893 3.96084 19 4.46954 19 4.99998V21Z"
      stroke={color || "#E8E8E8"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ProfileIcon = ({
  color,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.4444 20V18.2222C18.4444 17.2792 18.0698 16.3749 17.403 15.7081C16.7362 15.0413 15.8319 14.6667 14.8889 14.6667H9.55556C8.61256 14.6667 7.70819 15.0413 7.0414 15.7081C6.3746 16.3749 6 17.2792 6 18.2222V20M15.7778 7.55556C15.7778 9.51923 14.1859 11.1111 12.2222 11.1111C10.2585 11.1111 8.66667 9.51923 8.66667 7.55556C8.66667 5.59188 10.2585 4 12.2222 4C14.1859 4 15.7778 5.59188 15.7778 7.55556Z"
      stroke={color || "#E8E8E8"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TechIcon = ({
  color,
  width,
  height,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    width={width || "16"}
    height={height || "17"}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6667 2.49998H3.33333C2.59695 2.49998 2 3.09693 2 3.83331V13.1666C2 13.903 2.59695 14.5 3.33333 14.5H12.6667C13.403 14.5 14 13.903 14 13.1666V3.83331C14 3.09693 13.403 2.49998 12.6667 2.49998Z"
      stroke={color || "#E8E8E8"}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.33301 6.5H9.99967C10.3533 6.5 10.6924 6.35952 10.9425 6.10948C11.1925 5.85943 11.333 5.52029 11.333 5.16667V2.5"
      stroke={color || "#E8E8E8"}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.00033 7.83329C6.73671 7.83329 7.33366 7.23634 7.33366 6.49996C7.33366 5.76358 6.73671 5.16663 6.00033 5.16663C5.26395 5.16663 4.66699 5.76358 4.66699 6.49996C4.66699 7.23634 5.26395 7.83329 6.00033 7.83329Z"
      stroke={color || "#E8E8E8"}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.66699 14.5V11.8333C4.66699 11.4797 4.80747 11.1406 5.05752 10.8905C5.30756 10.6405 5.6467 10.5 6.00033 10.5H8.66699"
      stroke={color || "#E8E8E8"}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0003 11.8333C10.7367 11.8333 11.3337 11.2363 11.3337 10.5C11.3337 9.76358 10.7367 9.16663 10.0003 9.16663C9.26395 9.16663 8.66699 9.76358 8.66699 10.5C8.66699 11.2363 9.26395 11.8333 10.0003 11.8333Z"
      stroke={color || "#E8E8E8"}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ScienceIcon = ({
  color,
  width,
  height,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "16"}
    height={height || "16"}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color || "#E8E8E8"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="1" />
    <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
    <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
  </svg>
);

export const EducationIcon = ({
  color,
  width,
  height,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    width={width || "16"}
    height={height || "16"}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.6673 6.66665V10.6666M14.6673 6.66665L8.00065 3.33331L1.33398 6.66665L8.00065 9.99998L14.6673 6.66665Z"
      stroke={color || "#E8E8E8"}
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 8V11.3333C6 13.3333 10 13.3333 12 11.3333V8"
      stroke={color || "#E8E8E8"}
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BusinessIcon = ({
  color,
  width,
  height,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    width={width || "16"}
    height={height || "16"}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3333 4.66667H2.66668C1.9303 4.66667 1.33334 5.26363 1.33334 6.00001V12.6667C1.33334 13.4031 1.9303 14 2.66668 14H13.3333C14.0697 14 14.6667 13.4031 14.6667 12.6667V6.00001C14.6667 5.26363 14.0697 4.66667 13.3333 4.66667Z"
      stroke={color || "#E8E8E8"}
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.6667 14V3.33333C10.6667 2.97971 10.5262 2.64057 10.2762 2.39052C10.0261 2.14048 9.68697 2 9.33334 2H6.66668C6.31305 2 5.97392 2.14048 5.72387 2.39052C5.47382 2.64057 5.33334 2.97971 5.33334 3.33333V14"
      stroke={color || "#E8E8E8"}
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TripleDotsIcon = ({
  color,
  width,
  height,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    width={width || "24"}
    height={height || "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6668 12.6667C12.2191 12.6667 12.6668 12.2189 12.6668 11.6667C12.6668 11.1144 12.2191 10.6667 11.6668 10.6667C11.1145 10.6667 10.6668 11.1144 10.6668 11.6667C10.6668 12.2189 11.1145 12.6667 11.6668 12.6667Z"
      stroke={color || "white"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.6668 6C12.2191 6 12.6668 5.55228 12.6668 5C12.6668 4.44772 12.2191 4 11.6668 4C11.1145 4 10.6668 4.44772 10.6668 5C10.6668 5.55228 11.1145 6 11.6668 6Z"
      stroke={color || "white"}
      stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.6668 20C12.2191 20 12.6668 19.5523 12.6668 19C12.6668 18.4477 12.2191 18 11.6668 18C11.1145 18 10.6668 18.4477 10.6668 19C10.6668 19.5523 11.1145 20 11.6668 20Z"
      stroke={color || "white"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TextIcon = ({
  color,
  width,
  height,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    width={width || "24"}
    height={height || "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.1303 18C20.0299 17.712 19.9627 17.4133 19.9303 17.11C19.2603 17.81 18.4503 18.16 17.5203 18.16C16.6903 18.16 16.0003 17.92 15.4703 17.45C14.9403 17 14.6703 16.39 14.6703 15.66C14.6703 14.78 15.0003 14.1 15.6703 13.61C16.3403 13.12 17.2803 12.88 18.5003 12.88H19.9003V12.24C19.9003 11.75 19.7503 11.36 19.4503 11.07C19.1503 10.78 18.7003 10.64 18.1203 10.64C17.6003 10.64 17.1703 10.76 16.8203 11C16.4703 11.25 16.3003 11.54 16.3003 11.89H14.8403C14.8403 11.46 14.9903 11.05 15.2903 10.65C15.5703 10.25 16.0003 9.94 16.5103 9.71C17.0203 9.5 17.5703 9.36 18.2003 9.36C19.1803 9.36 19.9403 9.6 20.4903 10.09C21.0403 10.58 21.3303 11.25 21.3503 12.11V16C21.3503 16.8 21.4503 17.42 21.6503 17.88V18H20.1303ZM17.7303 16.88C18.1803 16.88 18.6103 16.77 19.0203 16.56C19.4203 16.35 19.7203 16.07 19.9003 15.73V14.16H18.7703C17.0003 14.16 16.1103 14.63 16.1103 15.57C16.1103 16 16.2603 16.3 16.5703 16.53C16.8703 16.76 17.2503 16.88 17.7303 16.88ZM5.53032 13.71H9.60032L7.57032 8.29L5.53032 13.71ZM6.71032 6H8.43032L13.1403 18H11.2103L10.2403 15.43H4.89032L3.93032 18H2.00032L6.71032 6Z"
      fill={color || "white"}
    />
  </svg>
);
