import React from "react";
import Image from "next/image";

interface YouthMindLogoProps {
  variant?: "horizontal" | "vertical" | "iconOnly";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const YouthMindLogo: React.FC<YouthMindLogoProps> = ({
  variant = "horizontal",
  className = "",
  size = "md",
}) => {
  // Logo PNG sudah transparan dan berisi ikon di atas + teks "YouthMind" di bawah
  // Untuk vertical: tampilkan PNG full as-is
  // Untuk horizontal: tampilkan PNG full tapi lebih kecil (biarkan ikon+teks muncul berdampingan di dalam PNG)
  // Untuk iconOnly: crop ke bagian atas saja (ikon)

  if (variant === "vertical") {
    const heights = { sm: 80, md: 100, lg: 130 };
    const widths = { sm: 72, md: 90, lg: 115 };
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <Image
          src="/assets/logo.png"
          alt="YouthMind Company"
          width={widths[size]}
          height={heights[size]}
          className="object-contain"
          priority
        />
      </div>
    );
  }

  if (variant === "iconOnly") {
    const px = { sm: 32, md: 40, lg: 56 };
    return (
      <div className={`inline-flex ${className}`}>
        <div
          className="relative overflow-hidden"
          style={{ width: px[size], height: px[size] }}
        >
          {/* Tampilkan hanya bagian atas (ikon) dari PNG vertikal dengan overflow hidden */}
          <Image
            src="/assets/logo.png"
            alt="YouthMind Logo Icon"
            width={px[size]}
            height={px[size] * 1.5}
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    );
  }

  // horizontal: ikon (crop atas) di kiri + teks "YouthMind" di kanan
  const iconSizes = { sm: 28, md: 36, lg: 52 };
  const textSizes = { sm: "text-base", md: "text-lg", lg: "text-2xl" };
  const iconPx = iconSizes[size];

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Icon only: crop bagian atas PNG yang berisi logo mark */}
      <div
        className="relative shrink-0 overflow-hidden"
        style={{ width: iconPx, height: iconPx }}
      >
        <Image
          src="/assets/logo.png"
          alt="YouthMind Logo"
          width={iconPx}
          height={Math.round(iconPx * 1.55)}
          className="object-cover object-top"
          style={{ marginTop: 0 }}
          priority
        />
      </div>
      {/* Wordmark di sebelah kanan */}
      <span className={`font-black tracking-tight text-white leading-none ${textSizes[size]}`}>
        Youth<span style={{ color: "#4BA0A4" }}>Mind</span>
      </span>
    </div>
  );
};

export default YouthMindLogo;
