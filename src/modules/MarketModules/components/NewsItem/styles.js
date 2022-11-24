import styled from 'styled-components'

export const NewsItem = styled.div`
  position: relative;
  padding: 0.5rem 0;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.02em;

  color: #000000;
`

export const Time = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;

  color: #808080;
`

export const Content = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;

  letter-spacing: 0.04em;

  color: #000000;

  display: block;
  display: -webkit-box;
  height: 2.5em;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
