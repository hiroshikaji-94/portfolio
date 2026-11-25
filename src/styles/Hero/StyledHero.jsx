import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translate(-50%, 0); }
  40% { transform: translate(-50%, -10px); }
  60% { transform: translate(-50%, -5px); }
`;

const blink = keyframes`
  50% { opacity: 0; }
`;

export const StyledHero = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: calc(var(--nav-height) + 3rem) 0 5rem;
  overflow: hidden;
  background: linear-gradient(135deg, var(--bg-alt) 0%, var(--bg) 100%);
  transition: background-color 0.3s ease;
`;

export const StyledHeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media ${({ theme }) => theme.bp.laptop} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const StyledHeroText = styled(motion.div)``;

export const StyledHeroTitle = styled.h1`
  margin-bottom: 1.5rem;
`;

export const StyledGreeting = styled.span`
  display: block;
  color: var(--text-secondary);
  font-size: 1.25rem;
  font-weight: 400;
`;

export const StyledName = styled.span`
  display: block;
  margin: 0.5rem 0;
  padding-bottom: 0.08em;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.15;

  @media ${({ theme }) => theme.bp.tablet} {
    font-size: 3rem;
  }

  @media ${({ theme }) => theme.bp.mobile} {
    font-size: 2.5rem;
  }
`;

export const StyledRole = styled.span`
  display: flex;
  align-items: center;
  min-height: 1.35em;
  color: var(--accent);
  font-size: 2rem;
  font-weight: 600;

  @media ${({ theme }) => theme.bp.mobile} {
    font-size: 1.5rem;
  }
`;

export const StyledCaret = styled.span`
  display: inline-block;
  width: 3px;
  height: 0.9em;
  margin-left: 4px;
  border-radius: 1px;
  background-color: var(--accent);
  animation: ${blink} 1s step-end infinite;
`;

export const StyledHeroDescription = styled.p`
  max-width: 500px;
  margin-bottom: 2rem;
  font-size: 1.25rem;

  @media ${({ theme }) => theme.bp.laptop} {
    max-width: 640px;
  }

  @media ${({ theme }) => theme.bp.mobile} {
    font-size: 1.125rem;
  }
`;

export const StyledStats = styled.dl`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 2rem;
  margin-bottom: 2rem;

  div {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  }

  dd {
    color: var(--primary);
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.3;
  }

  dt {
    color: var(--text-muted);
    font-size: 0.875rem;
  }

  /* Keep all three stats on one row on phones. */
  @media ${({ theme }) => theme.bp.mobile} {
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: start;
    gap: 1rem 1.25rem;

    dd {
      font-size: 1.5rem;
    }

    dt {
      font-size: 0.8125rem;
    }
  }
`;

export const StyledActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media ${({ theme }) => theme.bp.mobile} {
    flex-direction: column;
  }
`;

export const StyledHeroVisual = styled(motion.div)`
  position: relative;
`;

export const StyledCodeWindow = styled.div`
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.14);
  border-radius: var(--radius);
  background-color: var(--code-bg);
  box-shadow: var(--shadow-hover);
  font-family: var(--font-mono);
`;

export const StyledCodeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background-color: rgba(255, 255, 255, 0.03);

  span {
    color: #f1f5f9;
    font-size: 0.875rem;
  }
`;

export const StyledCodeDots = styled.div`
  display: flex;
  gap: 0.5rem;

  i {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ef4444;
  }

  i:nth-child(2) {
    background-color: #f59e0b;
  }

  i:nth-child(3) {
    background-color: #10b981;
  }
`;

export const StyledCode = styled.pre`
  margin: 0;
  padding: 1.5rem;
  overflow-x: auto;
  color: #f1f5f9;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.6;

  .kw {
    color: #c792ea;
  }
  .fn {
    color: #82aaff;
  }
  .self {
    color: #f78c6c;
  }
  .str {
    color: #c3e88d;
  }

  @media ${({ theme }) => theme.bp.mobile} {
    padding: 1rem;
    font-size: 0.75rem;
  }
`;

export const StyledFloatingIcon = styled.span`
  position: absolute;
  color: var(--primary);
  pointer-events: none;
  animation: ${float} 3s ease-in-out infinite;

  svg {
    width: 2rem;
    height: 2rem;
  }

  @media ${({ theme }) => theme.bp.mobile} {
    display: none;
  }
`;

export const StyledScrollIndicator = styled.a`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  display: block;
  padding: 0.25rem 0.75rem;
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  pointer-events: ${({ $hidden }) => ($hidden ? 'none' : 'auto')};
  transform: translateX(-50%);
  transition: opacity 0.3s ease;
  animation: ${bounce} 2s infinite;

  span {
    position: relative;
    display: block;
    width: 2px;
    height: 3rem;
    background: linear-gradient(to bottom, var(--primary), transparent);
  }

  span::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 10px solid var(--primary);
  }

  @media (max-height: 640px) {
    display: none;
  }
`;
