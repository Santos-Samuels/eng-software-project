import { StyledArticle, StyledDiv } from "./styles";
import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { Collapse } from "react-collapse";

interface IProps extends React.ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
  title: string;
  icon: React.ReactNode;
}

const Collapsible: React.FC<IProps> = ({ children, title, icon, ...rest }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <StyledArticle {...rest}>
      <StyledDiv
        isExpanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>
          {icon}
          {title}
        </span>

        <HiOutlineChevronDown size={25} />
      </StyledDiv>
      <Collapse isOpened={isExpanded}>
        <section>{children}</section>
      </Collapse>
    </StyledArticle>
  );
};

export default Collapsible;
