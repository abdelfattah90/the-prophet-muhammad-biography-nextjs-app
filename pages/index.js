import Link from 'next/link'
import HeadComponent from '../components/HeadComponent'

const SectionsList = (props) => {
  const section = props.sections.map((section) => (
    <Link key={section.id} href={`/${encodeURIComponent(section.path)}`} passHref>
      <a className='sectionColor'>
        <div className='titlesCol'>
          <span className='titlesNum'>{section.id}</span>
          {section.title}
          
        </div>
      </a>
    </Link>
  ))
  return <div>{section}</div>
}

const sections = [
  { id: 1, title: 'المصطفى صلى الله عليه وسلم', path: 'section1' },
  { id: 2, title: 'نزول الوحي', path: 'section2' },
  { id: 3, title: 'الجهر بالدعوة', path: 'section3' },
  { id: 4, title: 'هجرة الحبشة', path: 'section4' },
  { id: 5, title: 'عام الحزن ومحنة الطائف', path: 'section5' },
  { id: 6, title: 'الإسراء والمعراج', path: 'section6' },
  { id: 7, title: 'بيعة العقبة', path: 'section7' },
  { id: 8, title: 'الهجرة', path: 'section8' },
  { id: 9, title: 'غزوة بدر', path: 'section9' },
  { id: 10, title: 'غزوة بني قينقاع', path: 'section10' },
  { id: 11, title: 'غزوة أُحد', path: 'section11' },
  { id: 12, title: 'غدر عَضَل والقارة', path: 'section12' },
  { id: 13, title: 'فاجعة بئر معونة', path: 'section13' },
  { id: 14, title: 'غزوة بني النضير', path: 'section14' },
  { id: 15, title: 'غزوة ذات الرقاع', path: 'section15' },
  { id: 16, title: 'بني المصطلق والمنافقون', path: 'section16' },
  { id: 17, title: 'حادثة الإفك', path: 'section17' },
  { id: 18, title: 'غزوة الأحزاب', path: 'section18' },
  { id: 19, title: 'ما كان مُحمَّد أبَا أحَدٍ', path: 'section19' },
  { id: 20, title: 'صلح الحديبية', path: 'section20' },
  { id: 21, title: 'غزوة خيبر', path: 'section21' },
  { id: 22, title: 'غزوة مؤتة', path: 'section22' },
  { id: 23, title: 'فتح مكة', path: 'section23' },
  { id: 24, title: 'غزوة حنين', path: 'section24' },
  { id: 25, title: 'غزوة تبوك', path: 'section25' },
  { id: 26, title: 'حجة الوداع', path: 'section26' },
  { id: 27, title: 'إلى الرفيق الأعلى', path: 'section27' },
]

export default function Home() {
  return (
    <>
      <HeadComponent title=' السيرة النبوية' />
      
      <div className='bodyColorMain'>
        <p className='text-center barnd-name'>السيــــــرة الـنـبـويـة</p>
        <p className='text-center barnd-name2'>قــصــص وعِــبَــر</p>
        <section className='container sectionIndex'>
          <SectionsList sections={sections} />
        </section>
        <br />
      </div>
    </>
  )
}
