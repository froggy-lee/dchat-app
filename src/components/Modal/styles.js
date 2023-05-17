import styled from 'styled-components'
import { Modal } from 'reactstrap'

export const ModalWrapper = styled(Modal)`
  width: ${props => (props.width ? props.width + 'rem' : '100%')};
  margin-top: 12rem;
  @media (max-width: 575px) {
    width: 96%;
    margin: auto;
    margin-top: 10rem;
  }
  &.modal-dialog {
    max-width: 100%;
  }
  .modal-content {
    /* padding: 1rem 1.5rem;
    border-radius: 25px;
    @media (max-width: 575px) {
      padding: 0.5rem;
    } */
    background: #ededef;
    border-radius: 15px;
    .modal-header {
      border-bottom: none;
      padding: 0;
      margin: 0;
      .btn-close {
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 3.25rem;
        opacity: 1;
        position: absolute;
        top: -4rem;
        right: 2rem;
        background: url('/images/icons/close-icon.png') no-repeat;
        background-size: cover;
      }
    }
    .modal-body {
      padding: 0;
    }
    .modal-footer {
      border-top: none;
      display: none;
    }
  }
`
