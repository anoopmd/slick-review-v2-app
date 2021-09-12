import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .modal-dialog.add-product-modal {
    .modal-header {
      border-bottom: none;
    }

    .modal-body {
      textarea {
        border: none;
        resize: none;
        width: 90%;

        &:focus, &:focus-visible {
          outline: none;
          border: none;
        }
      }
    }

    .modal-footer {
      text-align: left;
      border-top: none;
      justify-content: flex-start;

      .spinner-container {
        position: relative;
      }

      button {
        min-width: 135px;
        margin-right: 20px;
      }
    }
  }
`;
 
export default GlobalStyle;