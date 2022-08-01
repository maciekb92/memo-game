import styled from 'styled-components';

const MENU_COLORS = {
    text: '#4A586E',
    background: '#FFDFDC',
    buttonBackground: '#FEAC92'
};

export const MenuContainer = styled.div`
    height: 500px;
    width: 500px;
    gap: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4%;
    border: 5px solid #DCABAE;
    background-color: ${MENU_COLORS.background};
    color: ${MENU_COLORS.text};

    h1 {
        font-size: 50px;
    }

    Button {
        height: 40px;
        width: 180px;
        font-size: 20px;
        color: ${MENU_COLORS.text};
        background-color: ${MENU_COLORS.buttonBackground};
        border: 3px ${MENU_COLORS.text} dashed;
    }
`;
