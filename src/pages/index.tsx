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
                  to: '/the-ultimate-logistics-guide/docs/getting-started',
                  label: 'Explore',
                  description: 'Explore the logistics guide'
                },
                {
                  to: '/the-ultimate-logistics-guide/docs/category/truckload-market',
                  label: 'Truckload Market',
                  description: 'U.S. Truckload Market Guide'
                },
                {
                  to: '/the-ultimate-logistics-guide/docs/category/the-different-players-in-logistics',
                  label: 'The players',
                  description: 'Learn about brokers, carriers, shippers'
                },
                {
                  to: '/the-ultimate-logistics-guide/docs/category/ocean-shipping',
                  label: 'Ocean freight',
                  description: 'Ocean Container Shipping Guide'
                },
                {
                  to: '/the-ultimate-logistics-guide/docs/category/software',
                  label: 'Software',
                  description: 'Logistics Software Guide'
                },
                {
                  to: '/the-ultimate-logistics-guide/docs/category/supply-chain',
                  label: 'Supply Chain(e)',
                  description: 'Supply Chain(e) Guide'
                },
                {
                  to: '/the-ultimate-logistics-guide/docs/logistics-dictionary',
                  label: 'Dictionary',
                  description: 'Terms used in logistics'
                },
                {
                  to: '/the-ultimate-logistics-guide/docs/logistics-videos',
                  label: 'Educational videos',
                  description: 'Various helpful videos'
                },
                {
                  to: '/the-ultimate-logistics-guide/docs/logistics-cost-to-serve',
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
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />

      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  )
}