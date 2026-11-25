import styled, { keyframes } from 'styled-components';

// Rendered before the theme and translations load, so it uses fixed colours
// and shows both languages.
const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto 20px;
  border: 4px solid rgba(99, 102, 241, 0.2);
  border-top-color: #6366f1;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

const Label = styled.p`
  margin: 4px 0 0;
  font-size: 15px;
`;

const SuspenseFallback = () => {
  return (
    <div role='status'>
      <Spinner />
      <Label>Loading...</Label>
      <Label lang='ja'>読み込み中...</Label>
    </div>
  );
};

export default SuspenseFallback;
