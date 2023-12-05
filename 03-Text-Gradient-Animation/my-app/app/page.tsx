import Paragraph from '@/components/Paragraph'
import Image from 'next/image'


export default function Home() {
  const paragraph = 'It is long establised fact Dumped twice in just two months, Jacob Yeun wonders if he’s the problem. After years hiding behind his camera and a shocking summer glow up, he wasn’t quite ready for all the attention or to be someone’s boyfriend.  '

  return (
    <main>
      <div style={{height:'100vh'}}></div>
      <Paragraph value={paragraph}/>
      <div style={{height:'100vh'}}></div>
    </main>
  )
}
