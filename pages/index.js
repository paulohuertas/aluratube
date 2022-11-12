import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline} from "../src/components/Timeline";
import Banner from "../src/components/Banner";

function HomePage() {

    // console.log(config.playlists);

    return (
        <>
            <CSSReset/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}
            id="root">
                <Menu />
                <Banner banner={config.banner}/>
                <Header />
                <TimeLine playlists={config.playlists} id="root">
                    Conteudo
                </TimeLine>
            </div>
        </>
    );
}

export default HomePage

// function Menu() {
//     //const menuCssStyles = {margin: 'auto', display: 'center'};
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
  `;
function Header() {
    return (
        <StyledHeader>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} alt="profile picture" />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.position}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function TimeLine(props) {
    // console.log(`Dentro do componente, ${props}`);
    const playlists = Object.keys(props.playlists);
    console.log(playlists);

    return (
        <StyledTimeline>
            {playlists.map((playlistName) => {
                const videos = props.playlists[playlistName];
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                const substringVideo = video.title.substring(0, 50);
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <br />
                                        <span>
                                            {substringVideo}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                        {<div>
                            {videos.map((video) => {
                                let click = function handleClick(){
                                    console.log("This is: ", video.title.substring(0, 15) + "...");
                                    let options = {
                                        href: `${video.url}`,
                                        target: "_blank",
                                        id: "videoUrl"
                                    }
                                    const root = document.getElementById('root');
                                    const aElement = document.createElement("a", options);
                                    aElement.setAttribute("href", options.href);
                                    aElement.setAttribute("id", options.id);
                                    //aElement.setAttribute("target", options.target);
                                    //aElement.textContent = `${video.title}`;
                                    root.appendChild(aElement);
                                    aElement.click();
                                    root.removeChild(aElement);
                                    // const link = document.getElementById('videoUrl');
                                }
                                return(
                                        <button id="video" onClick={click}>VIDEO</button>
                                    )
                            })}
                        </div>}
                    </section>
                )
            })}
        </StyledTimeline>
    )
}