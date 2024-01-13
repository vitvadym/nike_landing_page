import { useEffect, useState, useRef } from 'react';

const useClickOutside = (initValue) => {
  const [isActive, setIsActive] = useState(initValue);

  const ref = useRef(null);

  const handleOutside = (event) => {
    if (event.target.alt === 'hamburger icon') {
      setIsActive(!isActive);
      return;
    }
    if (ref.current && !ref.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutside);

    return () => {
      document.removeEventListener('mousedown', handleOutside);
    };
  });

  return {
    ref,
    isActive,
  };
};

export default useClickOutside;
