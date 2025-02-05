import { User } from '../types';
import { Building2, Mail, User as UserIcon, MapPin } from 'lucide-react';

interface UserCardProps {
  user: User;
  isSelected: boolean;
  onClick: () => void;
}

export function UserCard({ user, isSelected, onClick }: UserCardProps) {
  const formattedAddress = `${user.address.suite}, ${user.address.street}, ${user.address.city} ${user.address.zipcode}`;

  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
        isSelected
          ? 'bg-blue-50 border-blue-500 border-2'
          : 'bg-white border-gray-200 border hover:shadow-md'
      }`}
    >
      <div className="flex items-start space-x-3">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <UserIcon className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{user.name}</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
            <Mail className="w-4 h-4" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
            <Building2 className="w-4 h-4" />
            <div>
              <span className="font-medium">{user.company.name}</span>
              <p className="text-xs text-gray-500 mt-0.5 italic">{user.company.catchPhrase}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
            <MapPin className="w-4 h-4" />
            <span className="text-xs">{formattedAddress}</span>
          </div>
        </div>
      </div>
    </div>
  );
}