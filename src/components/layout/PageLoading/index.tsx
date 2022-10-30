import ReactLoading from "react-loading";
import { StyledDiv } from "./styles";

const PageLoading: React.FC = () => {
  return (
    <StyledDiv>
      <ReactLoading type="bubbles" color="#671D04" height={150} width={150} />
    </StyledDiv>
  );
};

export default PageLoading;
