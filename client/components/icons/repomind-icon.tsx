import type { SVGProps } from "react";

import { cn } from "@/lib/utils";

type RepoMindIconProps = SVGProps<SVGSVGElement> & {
  variant?: "color" | "mono";
};

export function RepoMindIcon({
  className,
  variant = "color",
  ...props
}: RepoMindIconProps) {
  const mono = variant === "mono";
  const foreground = mono ? "var(--background)" : "#FFFFFF";

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      {...props}
    >
      <rect
        width="64"
        height="64"
        rx="15"
        fill={mono ? "currentColor" : "#0D9488"}
      />

      {/* Repository structure */}
      <path
        d="M16 23.5C16 21.6 17.6 20 19.5 20H44.5C46.4 20 48 21.6 48 23.5V44.5C48 46.4 46.4 48 44.5 48H19.5C17.6 48 16 46.4 16 44.5V23.5Z"
        stroke={foreground}
        strokeWidth="2.8"
        strokeLinejoin="round"
      />

      {/* Neural connections */}
      <path
        d="M25 29L32 36L39 29M32 36V43"
        stroke={foreground}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Neural nodes */}
      <circle cx="25" cy="28" r="3.5" fill={foreground} />
      <circle cx="39" cy="28" r="3.5" fill={foreground} />
      <circle cx="32" cy="36" r="3.5" fill={foreground} />
      <circle cx="32" cy="44" r="2.5" fill={foreground} />
    </svg>
  );
}

export function RepoMindLogo({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 230 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      {...props}
    >
      <rect width="64" height="64" rx="15" fill="#0D9488" />

      <path
        d="M16 23.5C16 21.6 17.6 20 19.5 20H44.5C46.4 20 48 21.6 48 23.5V44.5C48 46.4 46.4 48 44.5 48H19.5C17.6 48 16 46.4 16 44.5V23.5Z"
        stroke="#FFFFFF"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />

      <path
        d="M25 29L32 36L39 29M32 36V43"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="25" cy="28" r="3.5" fill="#FFFFFF" />
      <circle cx="39" cy="28" r="3.5" fill="#FFFFFF" />
      <circle cx="32" cy="36" r="3.5" fill="#FFFFFF" />
      <circle cx="32" cy="44" r="2.5" fill="#FFFFFF" />

      <text
        x="79"
        y="42"
        fill="currentColor"
        fontSize="27"
        fontWeight="700"
        letterSpacing="-1"
        fontFamily="Arial, sans-serif"
      >
        RepoMind
      </text>
    </svg>
  );
}
