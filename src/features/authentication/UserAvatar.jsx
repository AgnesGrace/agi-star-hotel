import styled from "styled-components";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const AvatarFallback = styled.div`
  width: 4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: var(--color-primary-50);
  color: var(--color-primary-700);
  font-size: 1.8rem;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;

  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

export default function UserAvatar() {
  //later we use the user from the backend
  const user = { name: "Divine", avatar: null };
  const firstLetter = user.name.charAt(0).toUpperCase();
  return (
    <StyledUserAvatar>
      {user?.avatar ? (
        <Avatar
          src={user?.avatar || "user-logo.jpg"}
          alt={`The avatar of ${user?.name}`}
        />
      ) : (
        <AvatarFallback>{firstLetter}</AvatarFallback>
      )}
      <span>{user.name}</span>
    </StyledUserAvatar>
  );
}
