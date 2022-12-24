import { IconTypes } from "./IconTypes";

export default function GithubIcon({ link, className }: IconTypes) {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
      className={className}
    >
      <g clipPath="url(#clip0_6_471)">
        <path
          d="M15 22V18.13C15.0375 17.6532 14.9731 17.1738 14.811 16.7238C14.6489 16.2738 14.3929 15.8634 14.06 15.52C17.2 15.17 20.5 13.98 20.5 8.52C20.4997 7.12383 19.9627 5.7812 19 4.77C19.4559 3.54851 19.4236 2.19835 18.91 0.999999C18.91 0.999999 17.73 0.649999 15 2.48C12.708 1.85882 10.292 1.85882 8 2.48C5.27 0.649999 4.09 0.999999 4.09 0.999999C3.57638 2.19835 3.54414 3.54851 4 4.77C3.03013 5.7887 2.49252 7.14346 2.5 8.55C2.5 13.97 5.8 15.16 8.94 15.55C8.611 15.89 8.35726 16.2954 8.19531 16.7399C8.03335 17.1844 7.96681 17.6581 8 18.13V22M8 19C3 20.5 3 16.5 1 16L8 19Z"
          stroke="#678398"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6_471">
          <rect width="22" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
