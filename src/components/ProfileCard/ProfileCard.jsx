import "react";
import SocialButton from "../SocialButton/SocialButton";
import "./ProfileCard.css";
import pfp from "./assets/salihefee.jpg";
import github from "./assets/github.svg";
import lastfm from "./assets/lastfm.svg";
import youtube from "./assets/youtube.svg";
import osu from "./assets/osu.svg";

const ProfileCard = () => {
    const calculateAge = () => {
        const birthDate = new Date('2007-09-19T00:00:00+03:00');
        const now = new Date();
        
        const utcPlus3 = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }));
        
        let age = utcPlus3.getFullYear() - birthDate.getFullYear();
        const monthDiff = utcPlus3.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && utcPlus3.getDate() < birthDate.getDate())) {
            age--;
        }
        
        return age;
    };

    const age = calculateAge();

    return (
        <>
            <div className="card">
                <div className="id">
                    <img src={pfp} alt="" />
                    <div className="info">
                        <div className="name">Salih Efe Ergür</div>
                        <div className="title light">Programmer</div>
                        <div className="agelocation light">{age}, Turkey</div>
                    </div>
                </div>
                <div className="bio thin">
                    {
                        "I'm a beginner programmer based in Turkey. I'm interested in low-level concepts and inner workings of a computer. I'm also interested in aviation and enjoy learning about aircraft systems and flight mechanics."
                    }
                </div>
                <div className="socials">
                    <SocialButton
                        link="https://github.com/salihefee"
                        image={github}
                        service="GitHub"
                        account="salihefee"
                        enabled={true}
                    />
                    <SocialButton
                        link="https://www.last.fm/user/pthreadgc2"
                        image={lastfm}
                        service="Last.fm"
                        account="pthreadgc2"
                        enabled={false}
                    />
                    <SocialButton
                        link="https://www.youtube.com/channel/UCCML6jkUGPjbirZDU6_b-wA"
                        image={youtube}
                        service="YouTube"
                        account="@salihefee"
                        enabled={true}
                    />
                    <SocialButton
                        link="https://osu.ppy.sh/u/salihefee"
                        image={osu}
                        service="osu!"
                        account="salihefee"
                        enabled={true}
                    />
                </div>
            </div>
        </>
    );
};

export default ProfileCard;