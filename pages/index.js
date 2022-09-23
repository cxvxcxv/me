import Head from 'next/head';
import Image from 'next/image';
import TopBar from '../components/top-bar';
import Cell from '../components/cell';
import Footer from '../components/footer';

export default function Index() {
  return (
    <>
      <Head>
        <title>who am i</title>
      </Head>
      <TopBar />
      <div className='wrapper'>
        <Image src='/../public/img/unknown-steam.jpg' className='pfp' alt='profile picture' width={184} height={184} />
          <h1>cxv</h1>
        <div className='grid-content'>
          <Cell img='steam.png' name='Steam' link='https://steamcommunity.com/id/cxvxcxv/' />
          <Cell img='spotify.png' name='Spotify' link='https://open.spotify.com/user/dmwbi25il6hj9pzrk2bsyukh7?si=438f76e42a134359'/>
          <Cell img='discord.png' name='Discord Server' link='https://discord.gg/mcPKcZh3' />
          <Cell img='github.png' name='GitHub' link='https://github.com/cxvxcxv' />
          <Cell img='instagram.png' name='Instagram' link='https://www.instagram.com/zisgeim09/' />
          <Cell img='youtube.png' name='YouTube' link='https://www.youtube.com/channel/UCpPOB1DULCBY74RQ3hXOGyQ' />
          <Cell img='twitch.jpg' name='Twitch' link='https://www.twitch.tv/cxv___' />
          <Cell img='tiktok.png' name='TikTok' link='https://www.tiktok.com/@zisgeim09' />
        </div>
      </div>
      <Footer />
    </>
  )
}