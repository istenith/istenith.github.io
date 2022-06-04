import{
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	WhatsappShareButton,
	WhatsappIcon,
	RedditShareButton,
	RedditIcon,
	LinkedinShareButton,
	LinkedinIcon
} from "react-share";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100%;
    color: white;
    justify-content: space-around;
`;

const Icons = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .react-share__ShareButton{
        margin: 0 0.4em;
        transition: 0.2s;
        &:hover{
            svg{
                circle{
                    fill: #e63468;
                }
            }
        }
    }
`;

const Share = ({title, url, tags}) => {
	return(
		<Container>
			<p>Found this blog helpful? share it with others</p>
			<Icons>
				<LinkedinShareButton url={url} title={title}><LinkedinIcon size={40} round={true}/></LinkedinShareButton>
				<FacebookShareButton url={url} title={title}><FacebookIcon size={40} round={true}/></FacebookShareButton>
				<TwitterShareButton url={url} title={title} hashtags={tags}><TwitterIcon size={40} round={true}/></TwitterShareButton>
				<WhatsappShareButton url={url} title={title}><WhatsappIcon size={40} round={true}/></WhatsappShareButton>
				<RedditShareButton url={url} title={title}><RedditIcon size={40} round={true}/></RedditShareButton>
			</Icons>
		</Container>
	);
};

export default Share;
