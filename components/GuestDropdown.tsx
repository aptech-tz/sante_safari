// components/GuestDropdown.tsx
'use client';
import React, { useEffect, useRef } from 'react';

export type GuestCounts = { babies: number; kids: number; adults: number; };

interface GuestDropdownProps {
  value: GuestCounts;
  onChange: (v: GuestCounts) => void;
  maxTotal?: number;
  buttonLabel?: string;
}

export default function GuestDropdown({ value, onChange, maxTotal = 20, buttonLabel = 'Guests' }: GuestDropdownProps) {
  const [open, setOpen] = React.useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const total = value.babies + value.kids + value.adults;

  function update<K extends keyof GuestCounts>(key: K, delta: number) {
    const next = { ...value, [key]: Math.max(0, value[key] + delta) } as GuestCounts;
    const nextTotal = next.babies + next.kids + next.adults;
    if (nextTotal > maxTotal) return;
    onChange(next);
  }

  const row = (label: string, sub: string, key: keyof GuestCounts) => (
    <div className="flex items-center justify-between py-3 border-b last:border-b-0 bg-gray-50 hover:bg-gray-100 transition-colors duration-150 rounded cursor-pointer">
      <div>
        <div className="font-medium text-sm">{label}</div>
        <div className="text-xs text-gray-500">{sub}</div>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label={`decrease ${label.toLowerCase()}`}
          onClick={() => update(key, -1)}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-lg bg-white hover:bg-gray-200 transition-colors duration-150 cursor-pointer disabled:opacity-50"
          disabled={value[key] <= 0}
        >
          −
        </button>
        <div className="min-w-[28px] text-center select-none">{value[key]}</div>
        <button
          type="button"
          aria-label={`increase ${label.toLowerCase()}`}
          onClick={() => update(key, 1)}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-lg bg-white hover:bg-gray-200 transition-colors duration-150 cursor-pointer disabled:opacity-50"
          disabled={total >= maxTotal}
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-sky-300 transition-colors duration-150 cursor-pointer"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <div className="text-sm font-medium">{buttonLabel}</div>
        <div className="text-sm text-gray-600">{total} {total === 1 ? 'guest' : 'guests'}</div>
      </button>

      {open && (
        <div className="absolute z-50 mt-2 left-0 w-full bg-white border border-gray-300 rounded-xl shadow-lg p-3">
          {row('Babies', 'Under 4 years', 'babies')}
          {row('Kids', '4 to 12 years', 'kids')}
          {row('Adults', '13 years or older', 'adults')}

          <div className="mt-3 flex justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-3 py-1 text-sm rounded border border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors duration-150 cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
