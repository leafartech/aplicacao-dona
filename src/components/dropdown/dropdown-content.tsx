interface DropdownContentProps {
    items: string[];
  }
  
  export default function DropdownContent({ items }: DropdownContentProps) {
    return (
      <div
        id="dropdown-content"
        className="border bg-client-pallet-2 rounded-b-xl p-6 ps-6 sm:ps-12 text-deep-blue opacity-80"
      >
        <ul className="list-disc sm:ps-8 ps-4">
          {items.map((item, index) => (
            <li
              className="text-sm sm:text-base leading-6"
              key={`dropdown-item-${index + 1}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  