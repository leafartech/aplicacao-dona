"use client";

import { useState } from "react";
import { MagicMotion } from "react-magic-motion";
import DropdownButton from "./dropdown-button";
import DropdownContent from "./dropdown-content";

interface DropdownProps {
  data: {
    title: string;
    items: string[];
  };
}

export default function Dropdown({ data }: DropdownProps) {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  function toggleDropdown() {
    setIsDropdownActive((prev) => !prev);
  }

  const [subtitle, title] = data.title.split("|");

  return (
    <MagicMotion
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 20,
        mass: 1.1,
      }}
    >
      <div className="overflow-hidden max-w-2xl">
        <DropdownButton
          subtitle={subtitle}
          title={title}
          isActive={isDropdownActive}
          onClick={toggleDropdown}
        />
        
        {isDropdownActive && <DropdownContent items={data.items} />}
      </div>
    </MagicMotion>
  );
}
