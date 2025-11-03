'use client';

import { trackPhoneClick } from '@/lib/analytics';

interface TrackablePhoneLinkProps {
  phoneNumber: string;
  displayText: string;
  location: string;
  className?: string;
  children?: React.ReactNode;
}

export default function TrackablePhoneLink({
  phoneNumber,
  displayText,
  location,
  className = '',
  children
}: TrackablePhoneLinkProps) {
  const handleClick = () => {
    trackPhoneClick(phoneNumber, location);
  };

  return (
    <a
      href={`tel:${phoneNumber.replace(/\D/g, '')}`}
      className={className}
      onClick={handleClick}
    >
      {children || displayText}
    </a>
  );
}

