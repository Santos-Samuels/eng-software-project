import { StyledArticle } from "./styles";
import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";
import useCollapse from "react-collapsed";

interface IProps extends React.ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
  title: string;
  icon: React.ReactNode;
}

const Collapsible: React.FC<IProps> = ({ children, title, icon, ...rest }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const { getCollapseProps } = useCollapse({ isExpanded });

  return (
    <StyledArticle
      {...rest}
      isExpanded={isExpanded}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div>
        <span>
          {icon}
          {title}
        </span>
        <HiOutlineChevronDown size={25} />
      </div>
      <section {...getCollapseProps()}>
        {children}
      </section>
    </StyledArticle>
  );
};

export default Collapsible;
