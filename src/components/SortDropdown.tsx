import React from 'react';
import { SortAsc } from 'lucide-react';
import { SortField } from '../types';

interface SortDropdownProps {
  value: SortField;
  onChange: (value: SortField) => void;
}

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="flex items-center space-x-2">
      <SortAsc className="w-4 h-4 text-gray-400" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortField)}
        className="text-sm border-none bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
      >
        <option value="name">Sort by Name</option>
        <option value="company">Sort by Company</option>
      </select>
    </div>
  );
}