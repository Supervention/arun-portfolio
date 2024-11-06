import ProjectCardHorizontal from '@/components/ProjectCardHorizontal'
// import RepositoryCard from '@/components/RepositoryCard'
import ContentRenderer from '@/components/ContentRenderer'
// import Reveal from '@/components/Reveal'

const Layout = ({ projects, github }) => {
  return (
    <div className="mx-auto p-4 md:p-6 lg:p-12">
      <div className="prose prose-headings:mb-4 dark:prose-invert">
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
