import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import DocCard from '@theme/DocCard'
import HomepageFeatures from '../components/HomepageFeatures'
import {VStack} from '@chakra-ui/react'
import LinkCards from '../theme/LinkCards'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <VStack>
            <LinkCards
              cards={[
                {
                  to: '/getting-started',
                  label: 'Explore',
                  description: 'Explore the logistics guide'
                },
                {
                  to: '/category/truckload-market',
                  label: 'Truckload Market',
                  description: 'U.S. Truckload Market Guide'
                },
                {
                  to: '/category/the-different-players-in-logistics',
                  label: 'The Players',
                  description: 'Learn about brokers, carriers, shippers'
                },
                {
                  to: '/category/ocean-shipping',
                  label: 'Ocean freight',
                  description: 'Ocean Container Shipping Guide'
                },
                {
                  to: '/category/software',
                  label: 'Software',
                  description: 'Logistics Software Guide'
                },
                {
                  to: '/category/supply-chain',
                  label: 'Supply Chain(e)',
                  description: 'Supply Chain(e) Guide'
                },
                {
                  to: '/logistics-dictionary',
                  label: 'Dictionary',
                  description: 'Terms used in logistics'
                },
                {
                  to: '/logistics-videos',
                  label: 'Educational videos',
                  description: 'Various helpful videos'
                },
                {
                  to: '/logistics-cost-to-serve',
                  label: 'Cost-to-serve',
                  description: 'What is cost-to-serve?'
                }
              ]}
            />
          </VStack>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="An open-source guide on logistics, supply-chain and the U.S truckload market."
    >
      <HomepageHeader />

      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  )
}
