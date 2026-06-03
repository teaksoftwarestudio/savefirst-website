import { ReactNode } from "react";

function Statusbar() {
  return (
    <div className="statusbar">
      <span>9:41</span>
      <span className="sb-right">
        <svg viewBox="0 0 17 11" width="16" height="10" fill="currentColor">
          <rect x="0" y="6" width="2.5" height="5" rx="0.5" />
          <rect x="3.6" y="4" width="2.5" height="7" rx="0.5" />
          <rect x="7.2" y="2" width="2.5" height="9" rx="0.5" />
          <rect x="10.8" y="0" width="2.5" height="11" rx="0.5" />
        </svg>
        <svg viewBox="0 0 16 11" width="15" height="10" fill="currentColor">
          <path d="M8 2.5c1.9 0 3.6.7 4.9 1.9l1-1A8.5 8.5 0 0 0 8 1 8.5 8.5 0 0 0 2.1 3.4l1 1A7 7 0 0 1 8 2.5z" />
          <path d="M8 5.5c1.1 0 2.1.4 2.8 1.1l1-1A6 6 0 0 0 8 4a6 6 0 0 0-3.8 1.6l1 1A4.5 4.5 0 0 1 8 5.5z" />
          <path d="M8 8.5l1.6-1.6A2.3 2.3 0 0 0 8 6.3c-.6 0-1.2.2-1.6.6L8 8.5z" />
        </svg>
        <svg viewBox="0 0 26 13" width="24" height="11" fill="none">
          <rect x="0.5" y="0.5" width="22" height="12" rx="3" stroke="currentColor" opacity="0.4" />
          <rect x="2" y="2" width="19" height="9" rx="1.5" fill="currentColor" />
          <rect x="23.5" y="4" width="1.8" height="5" rx="0.9" fill="currentColor" opacity="0.4" />
        </svg>
      </span>
    </div>
  );
}

export default function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="phone">
      <div className="notch"></div>
      <div className="screen">
        <div className="viewport">
          <Statusbar />
          <div className="app">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Statusbar };
