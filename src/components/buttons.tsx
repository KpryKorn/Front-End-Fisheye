import { useState } from "react";
import { displayModal } from "../lib/utils";

export const PrimaryBtn = () => {
  return (
    <button className="contact_button" onClick={displayModal}>
      Contactez-moi
    </button>
  );
};

export const Dropdown = ({
  options,
  onOptionSelected,
}: {
  options: string[];
  onOptionSelected: (option: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("Popularité");

  const handleOptionSelected = (option: string) => {
    setSelected(option);
    onOptionSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {selected}
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options
            .filter((option) => option !== selected)
            .map((option, idx) => (
              <div key={idx} onClick={() => handleOptionSelected(option)}>
                {option}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
