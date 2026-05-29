import { ReactNode } from "react";

export default function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="phone">
      <div className="notch"></div>
      <div className="screen">
        <div className="status">
          <span>9:41</span>
          <span className="right">
            <svg viewBox="0 0 14 9" fill="currentColor">
              <rect x="0" y="5" width="3" height="4" rx="0.5" />
              <rect x="4" y="3" width="3" height="6" rx="0.5" />
              <rect x="8" y="1" width="3" height="8" rx="0.5" />
            </svg>
            <span style={{ fontSize: 10 }}>100%</span>
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
