import styled, { css } from 'styled-components';
import searchIcon from 'assets/icons/magnifier.svg';

const Input = styled.input`
    padding: 15px 30px;
    font-size: ${({ theme }) => theme.fontSize.s};
    background-color: ${({ theme }) => theme.grey100};
    border: none;
    border-radius: 50px;

    ::placeholder {
        text-transform: uppercase;
        letter-spacing: 1px;
        color: ${({ theme }) => theme.grey300};
    }

    ${({ search }) =>
        search &&
        css`
            padding: 10px 20px 10px 40px;
            font-size: ${({ theme }) => theme.fontSize.xs};
            background-image: url(${searchIcon});
            background-size: 20px;
            background-position: 10px 50%;
            background-repeat: no-repeat;
        `}
`;

export default Input;
