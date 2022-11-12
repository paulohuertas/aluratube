import styled from "styled-components";

const BannerStyle = styled.img`
    width: 100%;
    display: block;
    height: 300px;
    content: url(${(props) => props.banner || "" })
`
export default function Banner(props){
    //const imagePath = config.banner;
    return (
        // <img src={imagePath} alt="banner" style={{
        //     width: "100%",
        //     display: "block",
        //     height: "300px"    
        // }}/>
        <BannerStyle banner={props.banner} />
    )
}