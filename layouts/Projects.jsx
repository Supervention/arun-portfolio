import ProjectCardHorizontal from '@/components/ProjectCardHorizontal'
import ContentRenderer from '@/components/ContentRenderer'
// import Reveal from '@/components/Reveal'

const Layout = ({ projects }) => {
  return (
    <div className="mx-auto p-4 md:p-6 lg:p-12">
      <div className="prose dark:prose-invert prose-headings:mb-4">
        <ContentRenderer source={projects} />
        <div className="mt-4 grid gap-4 md:mt-4 md:gap-6">
          {projects?.collection?.records?.map((item, i) => (
            <ProjectCardHorizontal key={item.slug} index={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Layout
