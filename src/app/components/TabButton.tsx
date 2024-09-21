import React from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
  active: boolean;           // 'active' is a boolean indicating if the tab is active
  selectTab: () => void;      // 'selectTab' is a function that takes no arguments and returns void
  children: React.ReactNode;  // 'children' is of type React.ReactNode to accept any valid JSX
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
