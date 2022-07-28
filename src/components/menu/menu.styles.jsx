import styled from 'styled-components';

export const MenuContainer = styled.div`
    @media only screen and (max-width: 600px) {
        width: 60vw;
    }
    @media only screen and (min-width: 600px) {
        width: 50vw;
    }
    @media only screen and (min-width: 768px) {
        width: 40vw;
    }
    @media only screen and (min-width: 992px) {
        width: 30vw;
    }
    height: 70vh;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30vh;
    border-radius: 4%;
    border: 5px solid #DCABAE;
    background-color: #FFDFDC;
    color: #4A586E;

    h1 {
        @media only screen and (max-width: 600px) {
            font-size: 45px;
        }

        @media only screen and (min-width: 600px) {
            font-size: 45px;
        }

        margin: 50px 0;
        font-size: 50px;
    }

    Button {
        @media only screen and (max-width: 600px) {
            width: 30vw;
        }

        @media only screen and (min-width: 600px) {
            width: 25vw;
        }
        @media only screen and (min-width: 768px) {
            width: 20vw;
           
        }
        @media only screen and (min-width: 992px) {
            width: 15vw;
        }

        height: 7vh;
        font-size: 20px;
        color: #4A586E;
        background-color: #FEAC92;
        border: 3px #4A586E dashed;
    }
`;
