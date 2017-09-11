import { colors } from "../variables/colors";
import styled from "styled-components";

// Components
import Anchor from "@/components/Anchor";

export const ArticleSummary = ({
  index,
  className,
  article: { sys: { id }, fields: { title, summary, image } }
}) => (
  <div className={className}>
    <div>
      <h2>{title}</h2>
      <p>{summary}</p>

      <Anchor
        href={{ pathname: "/article", query: { id: id } }}
        as={`/artikler/${id}`}
        style={{ inverted: index % 2 === 1 ? true : false }}
      >
        Les mer
      </Anchor>
    </div>
  </div>
);

export const StyledArticleSummary = styled(ArticleSummary)`
  background: ${props => (props.index % 2 === 1 ? colors.darkBlue : "#fff")};
  > div {
    padding: 60px 30px;
    max-width: 800px;
    margin: 0 auto;
  }
  h2 {
    color: ${props => (props.index % 2 === 1 ? "#fff" : colors.darkBlue)};
    font-size: 24px;
    margin: 0 0 20px 0;
  }
  p {
    margin: 0 0 20px 0;
    color: ${props => (props.index % 2 === 1 ? "#fff" : colors.darkBlue)};
  }
`;

export default ArticleSummary;
