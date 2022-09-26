import Head from 'next/head';
import Image from 'next/image';
import TopBar from '../components/top-bar';
import Cell from '../components/cell';

export default function Index() {
  return (
    <>
      <Head>
        <title>who am i</title>
      </Head>
      <TopBar currentPage='home' />
      <div className='wrapper'>
        <div>
          <Image src='https://avatars.steamstatic.com/15b54468444e3376f8283e033d3691e6795adc90_full.jpg' className='pfp' alt='profile picture' width={184} height={184} />
        </div>
        <h1>cxv</h1>
        <div className='grid-content'>
          <Cell imgLink='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png' name='Steam' link='https://steamcommunity.com/id/cxvxcxv/' />
          <Cell imgLink='https://www.freepnglogos.com/uploads/spotify-logo-png/image-gallery-spotify-logo-21.png' name='Spotify' link='https://open.spotify.com/user/dmwbi25il6hj9pzrk2bsyukh7?si=438f76e42a134359'/>
          <Cell imgLink='https://logodownload.org/wp-content/uploads/2017/11/discord-logo-7-1.png' name='Discord Server' link='https://discord.gg/mcPKcZh3' />
          <Cell imgLink='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' name='GitHub' link='https://github.com/cxvxcxv' />
          <Cell imgLink='https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584852.png' name='Instagram' link='https://www.instagram.com/zisgeim09/' />
          <Cell imgLink='https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-icon-symbol-18.png' name='YouTube' link='https://www.youtube.com/channel/UCpPOB1DULCBY74RQ3hXOGyQ' />
          <Cell imgLink='https://img.favpng.com/21/13/19/league-of-legends-twitch-streaming-media-video-game-livestream-png-favpng-Z3aB9hfZ0ySgxmtCs0gRFFgMV_t.jpg' name='Twitch' link='https://www.twitch.tv/cxv___' />
          <Cell imgLink='https://static.vecteezy.com/ti/gratis-vektor/p3/2557421-tiktok-logo-schwarz-mobile-social-media-icon-kostenlos-vektor.jpg' name='TikTok' link='https://www.tiktok.com/@zisgeim09' />
        </div>
      </div>
    </>
  )
}