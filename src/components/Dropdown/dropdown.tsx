import { useEffect, useState } from 'react';

export type DropdownProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  openUpwards?: boolean;
  centered?: boolean;
};

export const Dropdown = ({
  title,
  children,
  openUpwards = false,
  centered = false,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const containerClasses = `relative inline-block ${isOpen ? 'z-50' : ''} ${centered ? 'absolute inset-0 flex justify-center items-center' : ''}`;

  return (
    <div className={containerClasses}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 flex cursor-pointer items-center text-white"
      >
        {title}
      </div>

      {isOpen && (
        <>
          <div
            className={`absolute z-50 ${openUpwards ? 'bottom-full mb-2' : 'mt-2'} flex cursor-auto flex-col rounded-sm bg-white text-black ${centered ? 'flex items-center justify-center' : ''}`}
            aria-hidden={!isOpen}
          >
            {!openUpwards && (
              <div className="border-x-6 border-b-6 absolute -top-2 right-6 h-0 w-0 border-x-transparent border-b-white"></div>
            )}
            {openUpwards && (
              <div className="border-x-6 border-t-6 absolute bottom-full right-6 h-0 w-0 border-x-transparent border-t-white"></div>
            )}
            {children}
          </div>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            aria-hidden={!isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </>
      )}
    </div>
  );
};
