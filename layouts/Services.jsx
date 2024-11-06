import React from 'react'
import ContentRenderer from '@/components/ContentRenderer'
import Reveal from '@/components/Reveal'
import Icon from '@/components/Icon'

const Services = ({ main = {}, services = [], service = {} }) => {
  return (
    <div className="mx-auto p-4 md:p-6 lg:p-12">
      <div className="prose prose-headings:mb-4 dark:prose-invert">
        <ContentRenderer source={service} />
        <div className="mt-4 grid gap-4 md:grid-cols-3 md:gap-12">
          {services?.map((item, i) => (
            <Reveal
              animation="fade-in zoom-in"
              className="prose bg-white"
              delay={(i % 2) * 100}
              key={i}
            >
              <div className="align-center flex flex-col bg-gradient-to-br from-alpha-100 via-alpha to-beta p-8">
                {item.icon && (
                  <Icon {...item.icon} className="relative z-10 mb-6 h-12 w-12 fill-accent" />
                )}
                <h4 className="relative z-10 m-0">{item.title}</h4>
              </div>
              <div className="p-8 pt-3">
                <ContentRenderer source={item} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
