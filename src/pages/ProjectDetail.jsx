import { useParams } from 'react-router-dom'

export default function ProjectDetail() {
  const { slug } = useParams()
  return <h1 className="font-serif text-5xl pt-10">Project: {slug}</h1>
}
