import React from 'react'
import classNames from 'clsx'
import ContentRenderer from '@/components/ContentRenderer'
import Typewriter from '@/components/Typewriter'
import Reveal from '@/components/Reveal'
import Image from '@/components/Image'
import Icon from '@/components/Icon'

const History = ({ title, list }) => (
  <>
    <h3>{title}</h3>
    <Reveal
      animation="fade-in scale-x"
      className="h-1.5 bg-gradient-to-r from-black via-beta to-alpha"
    />
    <div className="mt-6 flex flex-col md:mt-12">
      {list?.map((item, i) => (
        <React.Fragment key={`item-${i}`}>
          <div className="flex" key={`item-${i}`}>
            <div>
              <h6 className="pr-1 font-medium">{item.name}</h6>
              <div>{item.description}</div>
            </div>
            <small className="ml-auto shrink-0 opacity-60">{item.date}</small>
          </div>
          <hr className="my-6" />
        </React.Fragment>
      ))}
    </div>
  </>
)

const Skill = ({ title, icon, level }) => (
  <div className="flex items-center">
    {icon && (
      <Icon width={28} height={28} {...icon} className="mr-3 h-7 w-7 fill-current text-omega-500" />
    )}
    <small className="font-bold">{title}</small>
    <div className="ml-auto space-x-px">
      {Array(5)
        .fill(null)
        .map((_, k) => (
          <span
            key={`${title}${k}-f`}
            className={classNames(
              'inline-block h-3.5 w-3.5',
              k + 1 <= level ? 'bg-gradient-to-tr from-accent-700 to-accent' : 'bg-omega-700'
            )}
          />
        ))}
    </div>
  </div>
)

const SkillSet = ({ title, list }) => (
  <div className="bg-gradient-omega-900 p-6 md:px-12 md:py-8">
    <p className="col-span-3 mb-6 mt-0 self-center border-l-2 border-alpha pl-3 text-white">
      {title}
    </p>
    <div className="grid grid-cols-1 gap-x-8 gap-y-3 [--tw-fluid-col-min:12rem] md:grid-cols-3">
      {list?.map((props, j) => (
        <Reveal key={j} animation="fade-in" delay={j * 200}>
          <Skill {...props} />
        </Reveal>
      ))}
    </div>
  </div>
)

const Layout = ({ personal_info = {}, cta = {}, page_header, skills, history }) => {
  return (
    <div className="mx-auto">
      <div className="prose prose-invert md:flex">
        <div>
          {page_header && (
            <div className="p-4 md:p-6 lg:p-12">
              <h3 className="mb-2">{page_header.title}</h3>
              {page_header.list && (
                <h3 className="inline">
                  <Typewriter lines={page_header.list} lineClassName="text-gradient-500" />
                </h3>
              )}
            </div>
          )}
          <Reveal
            animation="fade-in slide-in-top"
            className="prose px-6 dark:prose-invert md:px-12"
          >
            <ContentRenderer source={personal_info} />
          </Reveal>
          {skills && (
            <div className="grid grid-cols-1 items-start divide-y divide-omega-700 shadow-xl">
              {skills.map((props, i) => (
                <SkillSet key={i} {...props} />
              ))}
            </div>
          )}
        </div>
      </div>
      {history && (
        <div className="prose flex-wrap justify-between bg-white p-6 md:flex">
          {history.map((props, i) => (
            <div key={i} className="flex-1 md:p-12">
              <History {...props} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Layout
