const repositories = {
  hasSubFields: false,
  resolve: async (repositories) => {
    if (!Array.isArray(repositories) || !process.env.GITHUB_TOKEN) return null

    const records = await Promise.all(
      repositories.filter(Boolean).map(async (repo) => {
        try {
          const res = await fetch('https://api.github.com/repos/' + repo, {
            headers: { authorization: 'token ' + process.env.GITHUB_TOKEN },
          })
          if (!res.ok) {
            throw Error(`GitHub API returned ${res.status} for repository ${repo}`)
          }
          const json = await res.json()
          return {
            name: json.name,
            owner: json.owner?.login,
            url: json.html_url,
            description: json.description,
            language: json.language,
            stars: json.stargazers_count,
            forks: json.forks_count,
          }
        } catch (error) {
          console.log(error)
          return null
        }
      })
    )
    // Skip repositories that could not be fetched instead of failing the build
    return { records: records.filter(Boolean) }
  },
}

export default repositories
