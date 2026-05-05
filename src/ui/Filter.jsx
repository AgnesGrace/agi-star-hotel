import styled, { css } from "styled-components";
import Input from "./Input";
import { useSearchParams } from "react-router";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-primary-600);
      color: var(--color-primary-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-primary-600);
    color: var(--color-primary-50);
  }
`;

export default function Filter({ filterField, options = [] }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSearchParam =
    searchParams.get(filterField) || options.at(0)?.value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }
  return (
    <>
      <StyledFilter>
        {options.map((option) => (
          <FilterButton
            key={option.label}
            onClick={() => handleClick(option.value)}
            active={currentSearchParam === option.value}
            disabled={currentSearchParam === option.value}
          >
            {option.label}
          </FilterButton>
        ))}
      </StyledFilter>
    </>
  );
}
