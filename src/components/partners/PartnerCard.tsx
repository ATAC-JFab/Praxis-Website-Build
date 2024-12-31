import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PartnerCardProps {
  name: string;
  url: string;
  description?: string;
}

const PartnerCard = ({ name, url, description }: PartnerCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{name}</h3>
      {description && (
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
      )}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-navy hover:text-teal font-medium"
      >
        Visit Website
        <ExternalLink className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
};

export default PartnerCard;