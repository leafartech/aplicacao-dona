interface DropdownButtonProps {
    subtitle: string;
    title: string;
    isActive: boolean;
    onClick: () => void;
  }
  
  export default function DropdownButton({
    subtitle,
    title,
    isActive,
    onClick,
  }: DropdownButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`relative cursor-pointer p-4 pr-12 text-left w-full bg-client-pallet-2 font-medium rounded-xl ${
          isActive ? "rounded-b-none" : ""
        } flex flex-col gap-2 items-start`}
        type="button"
        aria-expanded={isActive}
        aria-controls="dropdown-content"
      >
        <span className="font-semibold text-white px-2 py-1 rounded-full bg-primary text-sm">
          {subtitle}
        </span>
        <span className="font-semibold text-xl sm:text-2xl">{title}</span>
      </button>
    );
  }
  