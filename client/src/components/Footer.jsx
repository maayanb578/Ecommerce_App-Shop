import { Facebook, Instagram, Mail, Phone, Telegram, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    background-color: gray;
    ${mobile({flexDirection: "column"})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;


const Logo = styled.h1`
    
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
    
       
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px; 
    cursor: pointer;   
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`;

const Title = styled.h3`
    margin-bottom: 15px;
`;

const List = styled.ul`
     margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    padding: 20px;
    flex: 1;
    ${mobile({backgroundColor: "lightgray"})}
`;

const ContactItem = styled.div`
    margin-bottom: 40px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;

`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>OM ॐ.</Logo>
                <Desc>OM ॐ. Is the best way to buy your style worldwide.
                    Choose your favorite items and we will send it directly to you.
                    There is no need for minimal quantities, so go ahead and choose your style.</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Telegram />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Traking</ListItem>
                    <ListItem>Wish List</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact: </Title>
                <ContactItem>
                <Phone style={{marginRight:"10px"}}/>
                Phone: 1-700-700-701
                </ContactItem>
                <ContactItem>
                <Mail style={{marginRight:"10px"}}/>
                Mail: info@om.co.il
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>

        </Container>
    )
}

export default Footer
