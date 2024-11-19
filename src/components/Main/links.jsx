import React, { useState } from 'react';



const LinkedInIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.6688 27.875H12.3219V17.3422H15.6688V27.875ZM13.9953 15.8656C12.9125 15.8656 12.125 15.0781 12.125 13.9953C12.125 12.9125 13.0109 12.125 13.9953 12.125C15.0781 12.125 15.8656 12.9125 15.8656 13.9953C15.8656 15.0781 15.0781 15.8656 13.9953 15.8656ZM27.875 27.875H24.5281V22.1656C24.5281 20.4922 23.8391 20 22.8547 20C21.8703 20 20.8859 20.7875 20.8859 22.2641V27.875H17.5391V17.3422H20.6891V18.8188C20.9844 18.1297 22.1656 17.0469 23.8391 17.0469C25.7094 17.0469 27.6781 18.1297 27.6781 21.3781V27.875H27.875Z" fill="#061C23"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29 14.9375C28.325 15.275 27.65 15.3875 26.8625 15.5C27.65 15.05 28.2125 14.375 28.4375 13.475C27.7625 13.925 26.975 14.15 26.075 14.375C25.4 13.7 24.3875 13.25 23.375 13.25C21.0125 13.25 19.2125 15.5 19.775 17.75C16.7375 17.6375 14.0375 16.175 12.125 13.925C11.1125 15.6125 11.675 17.75 13.25 18.875C12.6875 18.875 12.125 18.65 11.5625 18.425C11.5625 20.1125 12.8 21.6875 14.4875 22.1375C13.925 22.25 13.3625 22.3625 12.8 22.25C13.25 23.7125 14.6 24.8375 16.2875 24.8375C14.9375 25.85 12.9125 26.4125 11 26.1875C12.6875 27.2 14.6 27.875 16.625 27.875C23.4875 27.875 27.3125 22.1375 27.0875 16.85C27.875 16.4 28.55 15.725 29 14.9375Z" fill="#061C23"/>
  </svg>
);

const IconButton = ({ Icon, label, onClick, href, showCopied }) => {
  const ButtonOrLink = href ? 'a' : 'button';
  
  const renderIcon = () => {
    if (React.isValidElement(Icon)) {
      return Icon;
    }
    if (typeof Icon === 'function') {
      const LucideIcon = Icon;
      return <LucideIcon className="share-icon" />;
    }
    return null;
  };

  return (
    <div className="icon-container">
      {showCopied && (
        <div className="copied-tooltip">
          Copied to clipboard
        </div>
      )}
      <ButtonOrLink
        href={href}
        onClick={onClick}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
        className="share-icon-button"
        aria-label={label}
      >
        {renderIcon()}
      </ButtonOrLink>
    </div>
  );
};

const SocialShareButtons = () => {
  const [showCopied, setShowCopied] = useState(false);
  const currentUrl = 'https://example.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const icons = [
    { 
      Icon: Link2, 
      label: 'Copy Link', 
      onClick: handleCopy,
      showCopied 
    },
    { 
      Icon: LinkedInIcon, 
      label: 'LinkedIn', 
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}` 
    },
    { 
      Icon: TwitterIcon, 
      label: 'Twitter', 
      href: `https://twitter.com/intent/tweet?url=${currentUrl}` 
    }
  ];

  return (
    <div className="share-icons-wrapper">
      {icons.map(({ Icon, label, onClick, href, showCopied }) => (
        <IconButton
          key={label}
          Icon={Icon}
          label={label}
          onClick={onClick}
          href={href}
          showCopied={showCopied}
        />
      ))}
    </div>
  );
};
