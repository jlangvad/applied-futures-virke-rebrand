import '@/styles/virke.css'
import SiteHeader from '@/components/virke/SiteHeader'
import SiteFooter from '@/components/virke/SiteFooter'
import DocBar from '@/components/virke/DocBar'
import Hero from '@/components/marketing/Hero'
import TheName from '@/components/marketing/TheName'
import ThreeWays from '@/components/marketing/ThreeWays'
import FourDifferentiators from '@/components/marketing/FourDifferentiators'
import OperatorsAndStats from '@/components/marketing/OperatorsAndStats'
import Meetups from '@/components/marketing/Meetups'
import ShippedWithTeams from '@/components/marketing/ShippedWithTeams'
import WritingDown from '@/components/marketing/WritingDown'
import FinalCTA from '@/components/marketing/FinalCTA'

export default function Home() {
  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)', minHeight: '100vh' }}>
      <SiteHeader />
      <DocBar />

      <main className="virke-doc">
        <Hero />
        <TheName />
        <ThreeWays />
        <FourDifferentiators />
        <OperatorsAndStats />
        <Meetups />
        <ShippedWithTeams />
        <WritingDown />
      </main>

      <FinalCTA />
      <SiteFooter />
    </div>
  )
}
