"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { MouseEvent } from "react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/20/solid";

interface dropdownMenuClickEvent extends MouseEvent<HTMLButtonElement> {
  target: HTMLButtonElement;
}

interface DropdownProps {
  dropdownOptions: Option[];
  dropdownLabel: string;
}

interface Option {
  label: string;
  value: string;
}

export default function DropdownMenu({
  dropdownLabel,
  dropdownOptions,
}: DropdownProps) {
  const [checkedValue, setCheckedValue] = useState(dropdownOptions[0].value);

  const handleMenuItemClick = (e: dropdownMenuClickEvent) => {
    setCheckedValue(e.target.value);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className="inline-flex w-52 items-center justify-center rounded-md bg-light-elements px-2 py-4 font-semibold text-light-text
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <span>{dropdownLabel}</span>
          <ChevronDownIcon
            className="-mr-1 ml-2 h-5 w-5 text-light-text"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 mt-2 origin-top-right rounded-md bg-light-elements py-2 pl-2 pr-10 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1">
            {dropdownOptions.map((option) => (
              <Menu.Item key={option.value}>
                {({ active }) => (
                  <button
                    onClick={handleMenuItemClick}
                    className={`${
                      active || option.value === checkedValue
                        ? "bg-light-purple text-dark-text"
                        : "text-light-text"
                    } group flex w-full items-center rounded-md p-2`}
                    value={option.value}>
                    {option.value === checkedValue && (
                      <CheckIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                    )}
                    {option.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
