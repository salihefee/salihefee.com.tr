import "react";
import SocialButton from "../SocialButton/SocialButton";
import "./ProfileCard.css";
import pfp from "./assets/salihefee.jpg";
import github from "./assets/github.svg";
import lastfm from "./assets/lastfm.svg";
import youtube from "./assets/youtube.svg";
import osu from "./assets/osu.svg";

const ProfileCard = () => (
    <>
        <div className="card">
            <div className="id">
                <img src={pfp} alt="" />
                <div className="info">
                    <div className="name">Salih Efe Ergür</div>
                    <div className="title light">Programmer</div>
                    <div className="agelocation light">17, Turkey</div>
                </div>
            </div>
            <div className="bio thin">
                {
                    "I'm a beginner programmer based in Turkey. I'm interested in low-level concepts and inner workings of a computer. I'm also interested in aviation and enjoy learning about aircraft systems and flight mechanics."
                }
            </div>
            <div className="socials">
                <SocialButton link="https://github.com/salihefee" image={github} service="GitHub" account="salihefee" />
                <SocialButton
                    link="https://www.last.fm/user/pthreadgc2"
                    image={lastfm}
                    service="Last.fm"
                    account="pthreadgc2"
                />
                <SocialButton
                    link="https://www.youtube.com/channel/UCCML6jkUGPjbirZDU6_b-wA"
                    image={youtube}
                    service="YouTube"
                    account="@salihefee"
                />
                <SocialButton link="https://osu.ppy.sh/u/salihefee" image={osu} service="osu!" account="salihefee" />
            </div>
        </div>
    </>
);

export default ProfileCard;
