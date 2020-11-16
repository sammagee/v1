import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

function getPath(type: string) {
  return path.join(process.cwd(), `content/${type}`)
}

export function getSortedData(type: string) {
  const fileNames = fs.readdirSync(getPath(type))
  const allData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(getPath(type), fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...(matterResult.data as { date: string, title: string })
    }
  })

  return allData.sort((a, b) => {
    if (a.date < b.date) return 1
    else return -1
  })
}

export function getAllIds(type: string) {
  const fileNames = fs.readdirSync(getPath(type))

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getData(type, id) {
  const fullPath = path.join(getPath(type), `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string })
  }
}
