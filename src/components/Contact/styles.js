import styled from 'styled-components'

export const Contact = styled.section`
  position: relative;
  padding: 1rem 0;
`

export const Title = styled.h1`
  padding: 0.5rem 2rem;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.1px;

  color: #8e8e8e;
`

export const InfoContact = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid #e7e7e7;

  padding: 0.5rem 2rem;
  background: white;

  &:last-child {
    border: none;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin-right: 5px;
  min-width: 40px;
  height: 40px;

  span {
    border-radius: 50%;
    padding: 0;
  }
`

export const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  text-align: left;
`

export const Name = styled.h1`
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.4px;

  color: #000000;
  margin: 0;
`

export const LastSeen = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.1px;

  color: #7e7e82;
  margin: 0;
`

export const SearchBox = styled.div``

export const Search = styled.input`
  padding: 1rem 2rem;
  margin: 0.5rem auto;

  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.1px;

  border: 0.5px solid #e7e7e7;
  border-left: none;
  border-right: none;

  color: #c3c3c5;

  width: 100%;
  background: transparent;
`

// export const Checkbox = styled.div`
//   position: relative;
//   margin-right: 0.5rem;

//   display: block;
//   position: relative;
//   padding-left: 25px;
//   cursor: pointer;
//   font-size: 22px;

//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;

//   input {
//     position: absolute;
//     opacity: 0;
//     cursor: pointer;
//     height: 0;
//     width: 0;

//     &:checked ~ .checkmark {
//       background-color: #3a6fb7;

//       &:after {
//         display: block;
//       }
//     }
//   }

//   .checkmark {
//     position: absolute;
//     top: 50%;
//     left: 0;
//     transform: translateY(-50%);

//     height: 20px;
//     width: 20px;
//     border-radius: 50%;
//     border: 0.5px solid #c7c7c7;
//     background-color: #fff;

//     &:after {
//       content: '';
//       position: absolute;
//       display: none;

//       left: 7px;
//       top: 3px;
//       width: 5px;
//       height: 10px;

//       border: solid white;
//       border-width: 0 3px 3px 0;

//       -webkit-transform: rotate(45deg);
//       -ms-transform: rotate(45deg);
//       transform: rotate(45deg);
//     }
//   }
// `

export const ListInfoContactSection = styled.div`
  .alpha-list {
    width: 100%;
    height: 100vh;

    & > div:first-child {
      padding-right: 0 !important;

      & > div {
        & > div:first-child {
          padding: 0.5rem 2rem;

          font-weight: 600;
          font-size: 13px;
          line-height: 18px;
          letter-spacing: -0.1px;

          color: #8e8e8e !important;
        }
      }
    }

    div:nth-child(2) {
      right: 25px !important;
    }
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
`

export const Checkbox = styled.div`
  input {
    &[type='checkbox']:not(:checked),
    &[type='checkbox']:checked {
      position: absolute;
      left: 0;
      opacity: 0.01;
    }

    &:checked ~ .mask {
      background: #0071e3;
    }
  }
  .mask {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 0.5px solid #ccc;
    position: relative;

    margin-right: 1rem;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;

      background: url('/images/icons/select-checkbox.png') no-repeat;
      background-size: constain;
      background-position: center;
    }
  }
`
