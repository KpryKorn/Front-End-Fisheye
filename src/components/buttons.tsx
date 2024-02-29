import { useState } from "react";
import { displayModal } from "../lib/utils";

export const PrimaryBtn = () => {
  return (
    <button className="contact_button" onClick={displayModal}>
      Contactez-moi
    </button>
  );
};

export const Dropdown = ({ options }: { options: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("Popularité");

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
              <div
                key={idx}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
