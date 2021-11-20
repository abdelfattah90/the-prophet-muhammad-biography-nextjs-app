import Head from 'next/head'

export default function HeadComponent(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel='icon' href='/favicon.ico' />
      <link rel='apple-touch-icon' href='/favicon.ico' />
      <meta charset='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#537bc4' />
      <meta name='description' content='السيرة النبوية للدكتور على الصلابى' />
      <meta name='robots' content='index,follow' />
      <meta name='googlebot' content='index,follow' />
    </Head>
  )
}
