import styled, { keyframes } from 'styled-components'

const load = keyframes`
  to{transform: rotate(1turn)}
`

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem 0;
`

export const Loader = styled.div`
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: ${load} 1s infinite linear;
`
