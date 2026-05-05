import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router";
import styled from "styled-components";
import { PAGESIZE } from "../utils/constants";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;
const StyledParagraph = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-primary-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-primary-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-primary-600);
    color: var(--color-primary-50);
  }
`;

export default function Pagination({ numResults }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const currentPage = !page ? 1 : Number(page);

  const numberOfPages = Math.ceil(numResults / PAGESIZE);

  function handleNext() {
    const nextPage =
      currentPage === numberOfPages ? currentPage : currentPage + 1;
    searchParams.set("page", nextPage);
    setSearchParams(searchParams);
  }

  function handlePrevious() {
    const prevPage = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prevPage);
    setSearchParams(searchParams);
  }

  if (numberOfPages <= 1) return null;
  return (
    <StyledPagination>
      <StyledParagraph>
        <span>{(currentPage - 1) * PAGESIZE + 1} </span> to
        <span>
          {currentPage * PAGESIZE > numResults
            ? numResults
            : currentPage * PAGESIZE}
        </span>
        of <span> {numResults}</span>
      </StyledParagraph>
      <Buttons>
        <PaginationButton onClick={handlePrevious}>
          <HiChevronLeft /> <span>Previous</span>
        </PaginationButton>
        <PaginationButton onClick={handleNext}>
          <HiChevronRight /> <span>Next</span>
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}
